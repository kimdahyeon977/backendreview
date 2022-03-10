# 3/9일 백엔드 보강

- 백엔드 개발자의 업무

  1. 인증 / 인가 관리
  2. 기능 개발
  3. 명세서. 작성

  - 만약 AI 기능을 적용한다면 ?

    1. 서버에서는 이미지 데이터를 전달받고 해당 데이터를 AI 모델에 적용하여 결과값을 돌려준다.

    2. 클라이언트 측에서 이미지 데이터만 보낸다. 서버에서 돌려받은 값을 클라이언트에 적용한다.

- 리액트와 소통하기 위한 백엔드

  기본적으로 백엔드 서버와 프론트엔드 서버와 분리될 가능성이 크다.

  백엔드 서버에서는 모든 Response 결과 값을 JSON 형태로 돌려줘야한다.

  React는 SPA기 때문에 페이지 변환이 일어나지 않는다. 그렇기 때문에 백엔드에서 HTML을 돌려주거나 redirect를 발생시키면 안되고 모든 데이터를 JSON 형태로 돌려줘야 바람직하게 리액트와 소통이 가능하다.

## 폴더 구조

- app.js

  메인이 되는 파일로 최소한의 코드만 남긴다. (각종 미들웨어나 라우터 연결을 처리한다.)

- router

  기능을 분리해서 라우팅을 작성한다.

  - auth

    로그인/ 회원가입 기능 라우터

  - api

    로그인이 필요한 기능에 대한 라우터 (유저 목록 불러오기)

- middleware

  공통적으로 사용할 미들웨어를 작성한다.

  - loginRequired.js

    ​ 발급한 JWT 토큰에 대해 유효한지 체크하는 미들웨어

- model

  MongoDB 스키마 정의에 대한 미들웨어

## API 명세서

- POST /auth/login

  로그인 기능. 로그인 시 JWT 토큰 발급

  - 필요 바디

    ```json
    {
      "username":사용자 id,
      "password":사용자 pw
    }
    ```

  - Response

    ```json
    {
      "status": "succ",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
    ```

- POST /auth/register

  회원가입 기능

  - 필요 바디

    ```json
    {
      "username":사용자 id,
      "password":사용자 pw
    }
    ```

  - Response

    ```json
    {
    	"status":"succ"
    }
    or
    {
    	"status":"fail",
      "message": Error Message
    }
    ```

- GET /api/user (로그인 필요)

  회원가입 된 유저 목록을 가져옴.

  - 필요 헤더

    ```json
    "x-api-key": 로그인 때 발급 받은 token
    ```

  - Response

    ```json
    [
      {
      "ObjectId":"1232131"
      "username":"elice"
    	},
      ...
    ]
    ```

## React DEMO

백엔드를 완성하면 명세서를 작성후 프론트엔드는 명세서만 보고 개발을 진행합니다.

해당 프론트엔드에서의 API 호출 부분은 react_demo 폴더에서 확인할 수 있습니다.
