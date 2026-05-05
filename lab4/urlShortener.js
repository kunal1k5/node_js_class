// Shorten URL
const express = require('express');
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const validUrl = require('valid-url');
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());

//Database connection code
mongoose.connect('mongodb://localhost:27017/urlshortener')
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => console.log(err));

//Model

const url = mongoose.model({
  
})