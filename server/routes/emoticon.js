const express = require('express');

const router = express.Router();

const { Emoticon } = require('../models');

//  GET api/emoticon/smile
router.get('/', async (req, res, next) => {
  try {
    const emoticon = await Emoticon.findAll();
    if (emoticon) {
      res.status(200).json({ success: true, emoticon });
    } else {
      res.status(404).json({ success: false, message: '해당 이모티콘을 찾을 수 없습니다.' });
    }
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
    if (emoticon) {
      res.status(200).json({ success: true, emoticon });
    } else {
      res.status(404).json({ success: false, message: '해당 이모티콘을 찾을 수 없습니다.' });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
