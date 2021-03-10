const express = require("express");
const cors = require("cors");
const mailRouter = require("./src/routes/mails/mail");
const port = process.env.PORT;

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.use("/mail", mailRouter);

app.listen(port, () => console.log(`server started at port: ${port}`));
