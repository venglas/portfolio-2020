const express = require("express")
const router = express.Router()
const Login = require('../../models/login/login')
const { loginUser } = require('../../services/login')

router.post("/", async (req, res) => {
  const session = loginUser(req.body.username, req.body.password)
  if (!session) res.status(400).json({ msg: "login failed" })

  const login = new Login({
    username: req.body.username,
    password: req.body.password,
    session: session.session
  });

  try {
    const newLogin = await login.save();
    res.status(201).json(newLogin);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
