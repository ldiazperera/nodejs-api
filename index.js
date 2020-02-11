'use strict'

const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/trainingDB')
    .then(function() {
        console.log("Connected to the database");
        app.listen(port, () => {
            console.log(`Server is running in port ${port}`);
        })
    })