const express = require('express');
const multer = require('multer');
const path = require('path');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const router = express.Router();
const { Post, User, Tag, Image, Comment } = require('../models');

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + '_' + new Date().getTime() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// POST /api/post
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const isTitleEmpty = req.body.title.length === 0;
    const tags = req.body.tags;
    const post = await Post.create({
      title: isTitleEmpty ? 'no title' : req.body.title,
      caption: req.body.caption,
      UserId: req.user.id,
    });
    if (tags) {
      const result = await Promise.all(tags.map((tag) => Tag.findOrCreate({ where: { name: tag.toLowerCase() } })));
      await post.addTags(result.map((v) => v[0]));
    }
    if (req.body.imagePaths) {
      if (Array.isArray(req.body.imagePaths)) {
        const images = await Promise.all(req.body.imagePaths.map((image) => Image.create({ src: image })));
        await post.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.imagePaths });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: {
        id: post.id,
      },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User, // 댓글 작성자
              attributes: ['id', 'nickname'],
            },
          ],
        },
        {
          model: User, // 게시글 작성자
          attributes: ['id', 'nickname'],
        },
        {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        },
        {
          model: Tag,
          attributes: ['name'],
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST /api/post/images
router.post('/images', isLoggedIn, upload.array('image'), async (req, res, next) => {
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
});

// POST /post/1/comment
router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.postId,
      },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ['id', 'nickname'],
        },
      ],
    });
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /api/post/1
router.get('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.postId,
      },
    });
    if (!post) {
      return res.status(404).send('존재하지 않는 게시글입니다.');
    }

    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id', 'nickname', 'profile'],
        },
        {
          model: User,
          attributes: ['id', 'nickname', 'profile'],
          include: [
            {
              model: Post,
              order: [['createdAt', 'DESC']],
              include: [
                {
                  model: Image,
                },
              ],
            },
          ],
        },
        {
          model: Image,
          attributes: ['src'],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['id', 'nickname', 'profile'],
            },
          ],
        },
        {
          model: Tag,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// PATCH /post/1/like
router.patch('/:postId/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.');
    }
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE /post/1/like
router.delete('/:postId/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.');
    }
    await post.removeLikers(req.user.id);
    res.status(200).json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE /post/10
router.delete('/:postId', isLoggedIn, async (req, res, next) => {
  try {
    await Post.destroy({
      where: { id: req.params.postId, UserId: req.user.id },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE /post/comment/44
router.delete('/comment/:commentId', isLoggedIn, async (req, res, next) => {
  try {
    await Comment.destroy({
      where: { id: req.params.commentId, UserId: req.user.id },
    });
    res.status(200).json({ id: parseInt(req.params.commentId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
