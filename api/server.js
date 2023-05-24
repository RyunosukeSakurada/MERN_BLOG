const express = require('express');
const PORT = 5000;
const mongoose = require("mongoose");

const app = express();


mongoose.connect('mongodb+srv://MERN_BLOG:OST7omMEIJA8OhJM@cluster0.k1jdd8u.mongodb.net/')
.then(() => {
  console.log("Connecting with DataBase");
}).catch(() => {
  console.log("error");
})

app.listen(PORT, () => console.log("Server Started"))

