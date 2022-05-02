# Incursia

<img src=""></img>

Incursia는 일러스트 투고와 열람이 가능한 일러스트 커뮤니케이션 서비스입니다.
픽시브를 참고하여 제작되었습니다.

## 기능

- 일러스트 투고, 열람, 삭제
- 좋아요
- 댓글 작성(스탬프 댓글 지원)
- 팔로우
- 태그 검색

<!-- ## System Architecture

<img src="./images/system-architecture.png"></img> -->

<!-- ## Network Architecture

<img src="./images/network-architecture.png"></img> -->

## 폴더 구조

```bash
.
├── server                  # Express 서버
│   ├── config              # 설정 파일
│   ├── models              # 시퀄라이즈 모델
│   ├── passport            # Passport 설정
│   ├── routes              # Express 라우터
│   ├── uploads             # 업로드 파일(.gitignore 적용)
│   ├── index.js            # Express 메인 파일
│   └── ...
├── client                  # Next.js
│   ├── public              # Static files
│   ├── components          # React components
│   ├── pages               # 넥스트 페이지
│   ├── store               # 리덕스 스토어
│   ├── utils               # 유틸 함수
│   ├── config              # 설정 파일
│   ├── reducers            # 리덕스 리듀서
│   ├── hooks               # 커스텀 훅
│   ├── typings             # 타입 정의
│   ├── sagas               # 리덕스 사가
│   └── ...
├── lambda                  # AWS 람다 (이미지 리사이징)
└── README.md
```

## 사용 기술

### 프론트엔드

- [TypeScript](https://www.typescriptlang.org)
- [Next.js](https://nextjs.org/)
- [Redux](https://redux.js.org/)
- [axios](https://axios-http.com/)
- [SWR](https://swr.vercel.app)
- [Ant Design](https://ant.design/)
- [styled-components](https://styled-components.com/)
- [Emotion](https://emotion.sh)

### 백엔드

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Passport.js](https://www.passportjs.org/)
- [Nodemailer](https://nodemailer.com/)

### Lambda

- [aws-sdk](https://aws.amazon.com/sdk-for-javascript/)
- [sharp](https://sharp.pixelplumbing.com/)

## 사용 예시

이것은 로컬에서 `Incursia`를 실행하는 방법을 설명하는 예시입니다. 로컬에서 실행하는 경우 다음과 같은 단계를 따르세요.

### 전제 사항

- [Node.js](https://nodejs.org) (version >= 14.x)
- [NPM](https://www.npmjs.com) (version >= 7.x)

### 설치

1. 레포지토리 설치

```bash
git clone https://github.com/1ncursio/incursia.git
```

1. 프론트엔드 NPM 라이브러리 설치

```bash
cd incursia/client
npm install
```

1. 프론트엔드 서버 실행

```bash
npm run dev
```

4. 백엔드 NPM 라이브러리 설치

```bash
cd incursia/server
npm install
```

5. `.env.example` 복사 후 `.env` 내용 수정

```bash
cp .env.example .env
```

6. 데이터베이스 마이그레이션 & 백엔드 서버 실행

```bash
npm run dev
```

http://localhost:3080/ 에서 이용 가능

<!-- ## Future Plans

- [ ] Refactor the code to use the Zustand
- [ ] Write tests
- [ ] Deploy the project
- [ ] Implement multi-player mode
- [ ] Migrate Backend Framework (e.g. Nest.js, fastify, django, etc.)
- [ ] Support i18n
- [ ] Support PWA
- [ ] Implement Scalable Game Board (e.g. 6x6, 8x8, 10x10, etc.) -->

## License

이 프로젝트는 MIT 라이선스를 따릅니다.

## Contact

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/seong-yun-byeon-8183a8113/)](https://www.linkedin.com/in/yechan-kim-710186230/)
[![Gmail Badge](https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:snugyun01@gmail.com)](mailto:ckswn1323@g.yju.ac.kr)
