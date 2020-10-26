const express = require("express");
const router = express.Router();
const Mail = require("../../models/mail/mail");

router.get("/", async (req, res) => {
  res.json({ test: "test" });
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const mail = new Mail({
    name: req.body.name,
    email: req.body.email,
    title: req.body.title,
    message: req.body.message,
    applicationID: req.body.applicationID
  });

  try {
    const newMail = await mail.save();
    res.status(201).json(newMail);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
