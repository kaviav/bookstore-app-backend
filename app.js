const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const dotenv = require("dotenv");

////

const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books/add

mongoose
  .connect(process.env.DATA_BASE)
  .then(() => console.log("connected to database"))
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));
/////
