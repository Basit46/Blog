const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articleRoute.js");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5001;

//Middlewares
app.use(cors());
app.use(express.json());
app.use("/articles", articleRouter);

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("connected");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  })
  .catch((err) => console.log(err));
