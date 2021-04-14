const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const path = require('path');
const { isLoggedIn, isNotLoggedIn, isAdmin } = require('./middlewares');
const router = express.Router();
const { Post, User, Tag, Image, Comment } = require('../models');

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'incursia-s3',
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname.replace(' ', '_'))}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});
// else {
//   const upload = multer({
//     storage: multer.diskStorage({
//       destination(req, file, done) {
//         done(null, 'uploads');
//       },
//       filename(req, file, done) {
//         const ext = path.extname(file.originalname);
//         const basename = path.basename(file.originalname, ext);
//         done(null, basename + '_' + new Date().getTime() + ext);
//       },
//     }),
//     limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
//   });
// }

// POST /api/post
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const isTitleEmpty = req.body.title.length === 0;
    const post = await Post.create({
      title: isTitleEmpty ? 'no title' : req.body.title,
      caption: req.body.caption,
      UserId: req.user.id,
      board: 'illustration',
    });
    if (req.body.imagePaths.length === 0) {
      return res.status(403).send('게시글에는 최소 1장의 이미지가 포함되어야 합니다.');
    }
    if (Array.isArray(req.body.imagePaths)) {
      const images = await Promise.all(req.body.imagePaths.map((image) => Image.create({ src: image })));
      await post.addImages(images);
    } else {
      const image = await Image.create({ src: req.body.imagePaths });
      await post.addImages(image);
    }
    const tags = req.body.tags;
    if (tags) {
      const result = await Promise.all(tags.map((tag) => Tag.findOrCreate({ where: { name: tag.toLowerCase() } })));
      await post.addTags(result.map((v) => v[0]));
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

// POST /api/post/notice
router.post('/notice', isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const isTitleEmpty = req.body.title.length === 0;
    const post = await Post.create({
      title: isTitleEmpty ? 'no title' : req.body.title,
      caption: req.body.caption,
      UserId: req.user.id,
      board: 'notice',
    });
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
  res.json(req.files.map((v) => v.location.replace(/\/original\//, '/thumbnail/')));
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

    await comment.update({
      replyId: comment.id,
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

// POST /post/1/comment
router.post('/:postId/reply', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.postId,
      },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    const comment = await Comment.findOne({ where: { id: req.body.replyId } });
    if (!comment) {
      return res.status(403).send('존재하지 않는 댓글입니다.');
    }
    const reply = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });

    const replyTarget = await Comment.findOne({ where: { id: req.body.replyId } });
    const replyTargetJSON = replyTarget.toJSON();

    if (replyTargetJSON.id !== replyTargetJSON.replyId) {
      await reply.update({ replyId: replyTargetJSON.replyId });
    } else {
      await reply.update({ replyId: replyTargetJSON.id });
    }

    const fullReply = await Comment.findOne({
      where: { id: reply.id },
      include: [
        {
          model: User,
          attributes: ['id', 'nickname'],
        },
      ],
    });
    res.status(201).json(fullReply);
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

    // const views = req.cookies.views || '';
    // console.log('조회수', views);

    // const splitedViews = views.split('_');

    // const view = splitedViews.find((v) => v === String(post.id));

    // if (!view) {
    //   // 안봤을 떄
    //   const cookieValue = views ? `${views}_${post.id}` : String(post.id);
    //   res.cookie('views', cookieValue, { maxAge: 1000 * 60 * 30 }); // 30분
    //   await post.increment('views');
    //   console.log('조회수 증가!');
    // } else {
    //   console.log('이미 봤습니다.');
    // }

    await post.increment('views');

    const fullPost = await Post.findOne({
      where: { id: post.id, board: 'illustration' },
      order: [
        [Comment, 'replyId', 'ASC'],
        [Comment, 'id', 'ASC'],
      ],
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
              // order: [['createdAt', 'DESC']],
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
          orders: [['createdAt', 'DESC']],
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

// GET /api/post/notice/1
router.get('/notice/:postId', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.postId,
        board: 'notice',
      },
    });
    if (!post) {
      return res.status(404).send('존재하지 않는 게시글입니다.');
    }

    // const views = req.cookies.views || '';
    // console.log('조회수', views);

    // const splitedViews = views.split('_');

    // const view = splitedViews.find((v) => v === String(post.id));

    await post.increment('views');

    const fullPost = await Post.findOne({
      where: { id: post.id },
      order: [
        [Comment, 'replyId', 'ASC'],
        [Comment, 'id', 'ASC'],
      ],
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
          orders: [['createdAt', 'DESC']],
          include: [
            {
              model: User,
              attributes: ['id', 'nickname', 'profile'],
            },
          ],
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
