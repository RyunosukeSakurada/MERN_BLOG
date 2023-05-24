const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const PORT = 5000;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();
require("dotenv").config();

const salt = bcrypt.genSaltSync(10);
const secret = 'afe24t24g9bub';

app.use(cors({credentials:true, origin:'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());


mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log("Connecting with DataBase");
}).catch(() => {
  console.log("error");
})


//sign up api
app.post('/signup', async (req,res) => {
  const {username, email, password} = req.body;
  try {
    const userDoc = await User.create({
      username, 
      email, 
      password:bcrypt.hashSync(password,salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e)
  }
});


//login api
app.post('/login', async (req,res) => {
  const {email, password} = req.body;
  const userDoc = await User.findOne({email});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if(passOk){
    jwt.sign({email,id:userDoc._id},secret,{},(e,token) => {
      if(e) throw e;
      res.cookie('token',token).json({
        id:userDoc._id,
        email,
      });
    });
  }else{
    res.status(400).json("Wrong Credentials")
  }
});


//profile
app.get('/profile', (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token,secret,{},(e,info) => {
    if(e) throw e;
    res.json(info)
  });
});


//logout
app.post('/logout', (req,res) => {
  res.cookie('token','').json('ok');
})



app.listen(PORT, () => console.log("Server Started"))

