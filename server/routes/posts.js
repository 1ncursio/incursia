const express = require('express');
const { Op } = require('sequelize');

const router = express.Router();

const { Post, Comment, Image, User, Tag } = require('../models');
const { isLoggedIn } = require('./middlewares');

//  GET api/posts
router.get('/', async (req, res, next) => {
  try {
    const where = { board: 'illustration' };
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }; //보다 작은
    }
    const posts = await Post.findAll({
      where,
      limit: 12,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      include: [
        {
          model: User, // 포스트 작성자
          attributes: ['id', 'nickname', 'profile'],
        },
        {
          model: Image,
          attributes: ['src'],
        },
        {
          model: Comment,
          include: [
            {
              model: User, // 댓글 작성자
              attributes: ['id', 'nickname', 'profile'],
            },
          ],
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
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//  GET api/posts/followings
router.get('/followings', isLoggedIn, async (req, res, next) => {
  try {
    const followings = await User.findAll({
      attributes: ['id'],
      include: [
        {
          model: User,
          as: 'Followers',
          where: { id: req.user.id },
        },
      ],
    });
    const where = { UserId: { [Op.in]: followings.map((v) => v.id) } };
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }; //보다 작은
    }
    const posts = await Post.findAll({
      where,
      limit: 12,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      include: [
        {
          model: User, // 포스트 작성자
          attributes: ['id', 'nickname', 'profile'],
        },
        {
          model: Image,
          attributes: ['src'],
        },
        {
          model: Comment,
          include: [
            {
              model: User, // 댓글 작성자
              attributes: ['id', 'nickname', 'profile'],
            },
          ],
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
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /hashtag/노드
router.get('/tag/:tag', async (req, res, next) => {
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }; //보다 작은
    }
    const posts = await Post.findAll({
      where,
      limit: 12,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      include: [
        {
          model: Tag,
          where: {
            name: decodeURIComponent(req.params.tag),
          },
        },
        {
          model: User, // 포스트 작성자
          attributes: ['id', 'nickname', 'profile'],
        },
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
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
