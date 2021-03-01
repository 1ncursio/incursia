const express = require('express');
const { Op } = require('sequelize');

const router = express.Router();

const { nanoid } = require('nanoid');
const jwt = require('jsonwebtoken');
const { Post, Comment, Image, User, Tag } = require('../models');
const { isLoggedIn } = require('./middlewares');
const { smtpTransport, emailTemplate } = require('../config/email');

//  GET api/validation?token=abcd~
router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    const token = req.query.token;

    const user = await User.findOne({ where: { id: req.user.id } });
    if (user.token !== token) {
      return res.status(403).json({ success: false, message: '토큰이 일치하지 않습니다.' });
    }

    await user.update({ status: 'authenticated' });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
