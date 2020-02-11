const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('User', schema);
