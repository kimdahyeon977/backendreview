const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./router/authRouter");
const apiRouter = require("./router/apiRouter");
const cors = require("cors");
app.use(cors());

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter); // 기능 분리
app.use("/api", apiRouter);

// 회원가입 / 로그인 등 인증 관련 기능 >> authRouter
// ai 관련 기능들 >> aiRouter  "/ai"
// 유저 관련된 기능들 >> userRouter "/user"

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.log("DB 연결 실패", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3001, () => console.log("listen 3001"));
