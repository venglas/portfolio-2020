const express = require("express");
const mail = require("../../models/mail/mail");
const router = express.Router();
const Mail = require("../../models/mail/mail");
const { checkApplicationID } = require('../../services/mail')

router.get("/", async (res) => {
  // const mails = new Mail({}).find()
  // res.json(mails)
  res.json({ msg: "elo" })
});

router.post("/", async (req, res) => {
  if(!checkApplicationID(req.body.applicationID)) {
    return res.status(401).json({ msg: "application not authorized."})
  } 

  const mail = new Mail({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
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
