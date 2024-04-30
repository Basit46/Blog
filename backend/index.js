const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Article = require("./models/ArticleModel");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5001;

//Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Server dearie");
});

app.get("/articles", (req, res) => {
  Article.find()
    .then((articles) => {
      res.status(200).json(articles); // Send the retrieved articles as JSON response
    })
    .catch((err) => {
      res.status(500).json({ error: err.message }); // Handle any errors
    });
});

app.get("/articles/:id", (req, res) => {
  const id = req.params.id;
  Article.findById(id)
    .then((articles) => {
      res.status(200).json(articles); // Send the retrieved articles as JSON response
    })
    .catch((err) => {
      res.status(500).json({ error: err.message }); // Handle any errors
    });
});

app.post("/article", (req, res) => {
  const article = new Article({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category,
    image: req.body.image,
    authorName: req.body.authorName,
    authorId: req.body.authorId,
  });

  article
    .save()
    .then((article) => {
      res.status(201).json(article); // Send the created article as JSON response
    })
    .catch((err) => {
      res.status(500).json({ error: err.message }); // Handle any errors
    });
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
