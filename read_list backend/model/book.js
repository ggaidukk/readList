//create a model

const express = require("express");
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose); //

const bookSchema = new mongoose.Schema({ 
    title: { type: String, required: true },
    author: { type: String, required: true },     
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    rating: { type: Number, min: 1, max: 5, required: true }
});

bookSchema.plugin(AutoIncrement, {inc_field: "bookId"}); //

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;