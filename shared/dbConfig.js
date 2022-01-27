const express = require("express");
const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION, 
    {
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useCreateIndex: true
    }, () => console.log('Connected to DB!')
);