const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books-controller");

const Book = require("../model/Book");

router.get("/getall", booksController.getAllBooks); // localhost:5000/books/getall  get req
router.get("/getone/:id", booksController.getById); //  localhost:5000/books/getone/id    get one
router.post("/add", booksController.addBook); //  localhost:5000/books/add   post req
router.put("/update/:id", booksController.updateBook); // localhost:5000/books/update/id    put/update req
router.delete("/delete/:id", booksController.deleteBook); // // localhost:5000/books/delete/id

module.exports = router;
