const express = require("express");

const router = express.Router();

const { Emoticon } = require("../models");

const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const path = require("path");

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "incursia-s3",
    key(req, file, cb) {
      cb(
        null,
        `original/${Date.now()}_${path.basename(
          file.originalname.replace(" ", "_")
        )}`
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

//  GET api/emoticon
router.get("/", async (req, res, next) => {
  try {
    const emoticon = await Emoticon.findAll();
    res.status(200).json(emoticon);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//  GET api/emoticon/smile
router.get("/:name", async (req, res, next) => {
  try {
    const { name } = req.params;
    const emoticon = await Emoticon.findOne({ where: { name } });
    res.status(200).json(emoticon);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//  GET api/emoticon
router.post("/", upload.single("image"), async (req, res, next) => {
  try {
    const {} = req.body;
    const exEmoticon = await Emoticon.findAll();
    res.status(201).json(emoticon);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
