const express = require('express');
const router = express.Router();
const { User, Post, Image, Tag, Comment } = require('../models');
const { isLoggedIn, isNotLoggedIn, testMiddleware } = require('./middlewares');
const bcrypt = require('bcrypt');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const { nanoid } = require('nanoid');
const { smtpTransport, emailTemplate } = require('../config/email');

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

// GET /api/user
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'],
        },
        include: [
          { model: Post, attributes: ['id'] },
          {
            model: User,
            as: 'Followings',
            attributes: ['id'],
          },
          {
            model: User,
            as: 'Followers',
            attributes: ['id'],
          },
        ],
      });

      console.log('req.ip', req.ip);

      res.status(200).json(user);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /user/ip
router.get('/ip', async (req, res, next) => {
  const ipInfo = req.ipInfo;
  console.log(ipInfo);
  var message = `Hey, you are browsing from ${ipInfo.city}, ${ipInfo.country}`;
  res.send(message);
});

// GET /user/1
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
      attributes: ['id', 'nickname', 'profile', 'introduction'],
    });
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(403).send('유저가 존재하지 않습니다.');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET api/user/1/followers
router.get('/:userId/followers', async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: parseInt(req.params.userId, 10) } });
    if (!user) {
      return res.status(403).send('유저가 존재하지 않습니다.');
    }
    const followers = await user.getFollowers(
      // { limit: parseInt(req.query.limit) }
      {
        attributes: ['id', 'nickname', 'profile', 'introduction'],
      }
    );
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET api/user/1/followings
router.get('/:userId/followings', async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: parseInt(req.params.userId, 10) } });
    if (!user) {
      return res.status(403).send('유저가 존재하지 않습니다.');
    }
    const followings = await user.getFollowings(
      // { limit: parseInt(req.query.limit) }
      {
        attributes: ['id', 'nickname', 'profile', 'introduction'],
      }
    );
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST /api/user
router.post('/', isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({ where: { email: req.body.email } });
    if (exUser) {
      return res.status(403).send('이미 사용 중인 이메일입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 11);

    const token = jwt.sign(
      { data: req.body.email },
      process.env.PRIVATE_KEY
      // , { expiresIn: 10 * 1000 }
    );

    const user = await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
      status: 'pending',
      token: token,
    });

    await smtpTransport.sendMail({
      from: process.env.NODEMAILER_USER,
      to: user.email,
      subject: '[유토피아] 링크를 클릭해 회원가입을 완료해주세요.',
      html: emailTemplate(token),
    });

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

router.post('/mail', isNotLoggedIn, async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email, status: 'pending' } });
  if (!user) {
    return res.status(403).json({ success: false, message: '가입되지 않았거나 이미 인증이 완료된 계정입니다.' });
  }

  await smtpTransport.sendMail({
    from: process.env.NODEMAILER_USER,
    to: user.email,
    subject: '[유토피아] 링크를 클릭해 회원가입을 완료해주세요.',
    html: emailTemplate(user.token),
  });

  res.status(200).json({ success: true, message: '성공' });
});

// POST /api/user/login
router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (info) {
      return res.status(401).json({ success: false, message: info.reason });
    }
    return req.logIn(user, async (loginErr) => {
      if (loginErr) {
        console.error(error);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password'],
        },
        include: [
          { model: Post },
          {
            model: User,
            as: 'Followings',
          },
          {
            model: User,
            as: 'Followers',
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

// POST /api/user/logout
router.post('/logout', isLoggedIn, (req, res) => {
  req.logOut();
  req.session.destroy();
  res.status(200).json({ success: true });
});

// PATCH /api/user/nickname
router.patch('/profile', isLoggedIn, upload.single('image'), async (req, res, next) => {
  try {
    await User.update(
      {
        profile: req.file.filename,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ success: true, profile: req.file.filename });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// PATCH /api/user/nickname
router.patch('/validation', testMiddleware, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { token: req.body.token, status: 'pending' } });
    if (!user) {
      return res.status(403).json({ success: false, message: '인증이 완료되었거나, 유효시간이 지났습니다.' });
    }
    await user.update({ status: 'authenticated' });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    next(error);
  }

  // jwt.verify(req.body.token, process.env.PRIVATE_KEY, async (err, decoded) => {
  //   try {
  //     if (err) {
  //       console.error(err);
  //       return next(err);
  //     }
  //     console.log('decoded', decoded);
  //     const user = await User.findOne({ where: { email: decoded.data, token: req.body.token, status: 'pending' } });
  //     if (!user) {
  //       return res.status(403).json({ success: false, message: '인증이 완료되었거나, 유효시간이 지났습니다.' });
  //     }
  //     await user.update({ status: 'authenticated' });
  //     res.status(200).json({ success: true });
  //   } catch (error) {
  //     console.error(error);
  //     next(error);
  //   }
  // });
});

// PATCH /api/user/nickname
router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        nickname: req.body.nickname,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ success: true, nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// PATCH /api/user/introduction
router.patch('/introduction', isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        introduction: req.body.introduction,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ success: true, introduction: req.body.introduction });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// PATCH /user/1/follow
router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: parseInt(req.params.userId, 10) } });
    if (!user) {
      return res.status(403).send('유저가 존재하지 않습니다.');
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE /user/1/follow
router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: parseInt(req.params.userId, 10) } });
    if (!user) {
      return res.status(403).send('유저가 존재하지 않습니다.');
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /user/1/posts
router.get('/:userId/posts', async (req, res, next) => {
  try {
    const where = { UserId: req.params.userId };
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }; //보다 작은
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
        // [Comment, 'createdAt', 'DESC'],
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

module.exports = router;
