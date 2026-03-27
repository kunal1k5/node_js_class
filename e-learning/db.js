const mongoose = require('mongoose');

//localhost:27017

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/e-learning");
        console.log("MongoDB connected");

    }catch(err){
        console.log(err);
    }
};

module.exports = connectDB;