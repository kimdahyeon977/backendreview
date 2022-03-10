# JSON-SERVER API 명세서

- 보강 첫 시간 몸 풀기로 진행한 JSON-SERVER의 API 명세서입니다.

# GET /data

data.json 읽고 돌려줌

- 필요 헤더

  없음

- 예상 결과값

- ```
  [
      {
          "id": 0,
          "title": "Hi",
          "body": "Hello World"
      },
      {
          "id": 2,
          "title": "zxc",
          "body": "asdasdsad"
      },
      {
          "id": 3,
          "title": "zxc",
          "body": "asdasdsad"
      }
  ]
  ```

# GET /data/:id

data.json에서 id를 찾아서 돌려줌

- 필요 헤더

  없음

- Response Data

  ```
  {
      "id": 0,
      "title": "Hi",
      "body": "Hello World"
  }
  ```

# POST /data

바디에서 온 데이터 data.json에 추가

- 필요 헤더
  - Content-Type: "application/json"
- 필요 바디

  - Any JSON

- Response

  `~~~~`

# DELETE /data/:id

해당 id data.json에서 지움

- 필요 헤더

  없음

- Response
