const express = require("express");
const Article = require("../models/ArticleModel");

const router = express.Router();

router.get("/", (req, res) => {
  Article.find()
    .then((articles) => {
      res.status(200).json(articles); // Send the retrieved articles as JSON response
    })
    .catch((err) => {
      res.status(500).json({ error: err.message }); // Handle any errors
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Article.findById(id)
    .then((articles) => {
      res.status(200).json(articles); // Send the retrieved articles as JSON response
    })
    .catch((err) => {
      res.status(500).json({ error: err.message }); // Handle any errors
    });
});

router.post("/", (req, res) => {
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

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Article.findByIdAndDelete(id)
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message }); // Handle any errors
    });
});

module.exports = router;
