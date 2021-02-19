const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
  //   tls: {
  //     rejectUnauthorized: false,
  //   },
});

const emailTemplate = (number) => {
  return `<body>
          <div id="container" style="position: absolute; top: 50%;left: 50%;transform: translate(-50%, -50%);border: 1px solid rgba(0, 0, 0, 0.25);border-radius: 5px;">
            <div id="inner-container" style="padding: 40px;">
              <p style="color: rgba(0, 0, 0, 0.8);">안녕하세요 누구누구님!</p>
              <p style="color: rgba(0, 0, 0, 0.8);">유토피아 인증 메일입니다.</p>
              <p style="color: rgba(0, 0, 0, 0.8);">아래의 인증 코드를 입력해주세요.</p>
              <div class="center" style="text-align: center"><b>${number}</b></div>
              <p class="from" style="margin-left: 10px;color: rgba(0, 0, 0, 0.8);">- 유토피아</p>
            </div>
            <p class="footer" style="margin: 5px 0;margin-right: 5px;float: right;color: rgba(0, 0, 0, 0.25);">ⓒ 2021 유토피아</p>
          </div>
        </body>`;
};

module.exports = {
  smtpTransport,
  emailTemplate,
};
