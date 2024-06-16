## Memotube 백엔드

Memotube는 YouTube 비디오에 대한 메모를 작성하고 관리할 수 있는 웹 애플리케이션입니다. 이 저장소는 Memotube 애플리케이션의 백엔드를 구성하며, Node.js와 Express를 사용하여 구축되었습니다. 데이터 저장소로는 MongoDB를 사용하고 있습니다.

## 주요 기능

- **사용자 인증**: JWT(JSON Web Token)를 사용한 사용자 등록 및 로그인 기능
- **메모 관리**: YouTube 비디오에 대한 메모 추가, 수정, 삭제 기능
- **리스트 관리**: 메모 리스트를 생성하고 게시판에 등록하는 기능
- **좋아요 기능**: 게시글에 대한 좋아요 및 좋아요 취소 기능

## 기술 스택

- **Node.js**: 백엔드를 위한 JavaScript 런타임
- **Express**: Node.js용 웹 프레임워크
- **MongoDB**: 데이터 저장을 위한 NoSQL 데이터베이스
- **Mongoose**: MongoDB와 Node.js를 위한 ODM(Object Data Modeling) 라이브러리
- **JWT**: 안전한 사용자 인증을 위한 JSON Web Token
- **CORS**: Cross-Origin Resource Sharing을 가능하게 하는 미들웨어

## 프로젝트 구조

```
.
├── controllers
│   ├── authController.js
│   ├── mylistController.js
│   └── postController.js
├── models
│   ├── Memo.js
│   ├── MyMemo.js
│   ├── Post.js
│   └── User.js
├── routes
│   ├── auth.js
│   ├── mylist.js
│   └── posts.js
├── services
│   ├── authServices.js
│   ├── myListServices.js
│   └── postServices.js
├── utils
│   ├── auth.js
│   └── dbMongoose.js
├── .env
├── app.js
├── package.json
└── vercel.json
```
