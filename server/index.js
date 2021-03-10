const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const mailRouter = require("./src/routes/mails/mail");
app.use("/mail", mailRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`server started at port: ${port}`));
