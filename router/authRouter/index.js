const express = require("express");
const router = express.Router();
const User = require("../../model/User");
const jwt = require("jsonwebtoken");

// login / register

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = await User.findOne({
      username: username,
    });
    if (!findUser) {
      // 아이디 없음
      res.json({
        status: "fail",
        message: "아이디가 존재하지 않습니다.",
      });
    } else if (findUser.password !== password) {
      res.json({
        status: "fail",
        message: "비밀번호가 존재하지 않습니다.",
      });
    } else {
      // 성공했을 때
      const token = jwt.sign(
        {
          username: username,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "1h",
        }
      );

      res.json({
        status: "succ",
        token,
      });
    }
  } catch (e) {
    res.json({
      status: "fail",
      message: e,
    });
  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const makeUser = new User({
      username,
      password,
    });
    await makeUser.save();
    res.json({
      status: "succ",
    });
  } catch (e) {
    res.json({
      status: "fail",
      message: e,
    });
  }
});

module.exports = router;
