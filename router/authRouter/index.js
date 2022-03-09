const express = require("express");
const router = express.Router();

// login / register

router.post("/login", (req, res) => {
  res.send("auth 라우터입니다");
});

router.post("/register", (req, res) => {
  res.send("auth 라우터입니다");
});

module.exports = router;
