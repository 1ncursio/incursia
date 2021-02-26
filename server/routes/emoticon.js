const express = require('express');

const router = express.Router();

const { Emoticon } = require('../models');

//  GET api/emoticon
router.get('/', async (req, res, next) => {
  try {
    const emoticon = await Emoticon.findAll();
    res.status(200).json(emoticon);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//  GET api/emoticon/smile
router.get('/:name', async (req, res, next) => {
  try {
    const { name } = req.params;
    const emoticon = await Emoticon.findOne({ where: { name } });
    res.status(200).json(emoticon);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
