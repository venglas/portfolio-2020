const express = require("express");
const router = express.Router();

const { transporter } = require("../../mailer");

router.post("/", async (req, res) => {
  const mail = {
    to: "bartek.bober.koder@gmail.com",
    text: `${req.body.message} | from: ${req.body.email}`,
    html: `<p>${req.body.message}</p> <br /> <p style="border: 2px solid black; border-radius: 4px; padding: 1rem;">${req.body.name} | ${req.body.email}</p>`,
    from: "bartek.bober.koder@gmail.com",
    subject: req.body.subject
  };

  transporter.sendMail(mail, (err, info) => {});
});

module.exports = router;
