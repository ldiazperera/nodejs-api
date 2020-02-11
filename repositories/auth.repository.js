const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

dotenv.config();

function login(user, password) {
    mailChimpConnect(user, password)
        .then((response) => {
            console.log(response);
        })
}

function mailChimpConnect(user, password) {
    let dc = password.split("-")[1];
    let url = `https://${dc}.${process.env.CHIMP_URL}`;
    let options = {
        url: url,
        headers: {
            "Authorization": `${user}:${password}`
        }
    }

}

module.exports = { login };