//implement CRUD apis - create controller
const express = require("express");
const mongoose = require("mongoose");
const book = require("../model/book.js");
const router = express.Router();

//Get
router.get("/api/v1/books", async (req, res) => {
  try {
    const books = await book.find({});
    res.send(books);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});


//Post
router.post("/api/v1/books", async (req, res) => {
  try {
    const { title, author, startDate, endDate, rating } = req.body;

    const bookObj = new book({
      title,
      author,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      rating: Number(rating),
    });

    const savedBook = await bookObj.save();
    res.status(201).json(savedBook);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

//Put
router.put("/api/v1/books/:bookId", async (req, res) => {
  try {
    const id = Number(req.params.bookId);
    const bookquery = { bookId: id };

    const updatedBook = await book.updateOne(bookquery, req.body);
    res.send(updatedBook);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

//Delete
router.delete("/api/v1/books/:bookId", async (req, res) => {
  try {
    const id = Number(req.params.bookId);
    const bookquery = { bookId: id };

    const deletedBook = await book.deleteOne(bookquery, req.body);
    res.send(deletedBook);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

module.exports = router;
