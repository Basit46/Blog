const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articleRoute.js");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5001;

//Middlewares
const corsOptions = {
  origin: "https://verso-blog.vercel.app",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("connected");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  })
  .catch((err) => console.log(err));

module.exports = app;
