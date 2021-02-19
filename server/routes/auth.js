const express = require('express');
const { Op } = require('sequelize');

const router = express.Router();

const dotenv = require('dotenv');
const { nanoid } = require('nanoid');
const jwt = require('jsonwebtoken');
const { Post, Comment, Image, User, Tag } = require('../models');
const { isLoggedIn } = require('./middlewares');
const { smtpTransport, emailTemplate } = require('../config/email');

dotenv.config();

//  GET api/auth
router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    const number = nanoid(10);
    const user = await User.findOne({ where: { id: req.user.id } });
    const token = jwt.sign(req.user.id, process.env.PRIVATE_KEY);
    console.log(token);

    const info = await smtpTransport.sendMail({
      from: 'incursiomail@gmail.com',
      to: user.email,
      subject: '[유토피아]인증 관련 이메일입니다',
      html: emailTemplate(number),
    });
    res.status(200).json({ success: true, info });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
