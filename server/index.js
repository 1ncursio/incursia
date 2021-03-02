const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const expressip = require('express-ip');
const path = require('path');
const passportConfig = require('./passport');
const app = express();

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const emoticonRouter = require('./routes/emoticon');

const db = require('./models');

dotenv.config();

db.sequelize
  .sync()
  .then(() => {
    console.log('MySQL 연결 성공');
  })
  .catch(console.error);
passportConfig();
app.use(expressip().getIpInfoMiddleware);
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:3080',
    credentials: true,
  })
);
app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/posts', postsRouter);
app.use('/api/emoticon', emoticonRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is listening ${process.env.PORT} port...`);
});
