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

const emailTemplate = (token) => {
  return `<body>
          <div id="container" style="position: absolute; top: 50%;left: 50%;transform: translate(-50%, -50%);border: 1px solid rgba(0, 0, 0, 0.25);border-radius: 5px;">
            <div id="inner-container" style="padding: 40px;">
              <p style="color: rgba(0, 0, 0, 0.8);">가입해주셔서 감사합니다.</p>
              <p style="color: rgba(0, 0, 0, 0.8);">환영합니다. 아래의 링크를 클릭해 주시면 가입이 완료됩니다!</p>
              <a href="https://incursia.site/validation?token=${token}">링크를 통해 계정 메일을 인증해주세요.</a>
              <p class="from" style="margin-left: 10px;color: rgba(0, 0, 0, 0.8);">- Incursia</p>
            </div>
            <p class="footer" style="margin: 5px 0;margin-right: 5px;float: right;color: rgba(0, 0, 0, 0.25);">ⓒ 2021 Incursia</p>
          </div>
        </body>`;
};

module.exports = {
  smtpTransport,
  emailTemplate,
};
