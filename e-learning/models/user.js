const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : {type: String, unique: true},
    password : String,
})

models.exports = mongoose.model('User', userSchema);
