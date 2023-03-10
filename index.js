const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI);
const cors = require("cors");

const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const productsRoute = require("./routes/products");
app.use(productsRoute);

app.all("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(process.env.PORT, () => console.log("Server started"));
