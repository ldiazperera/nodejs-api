const express = require('express');
const auth_router = express.Router();
const authController = require('../controllers/auth.controller');
const repository = require('../repositories/auth.repository');

var extRequest = require('request');

// auth_router.post('/login', authController.login);
auth_router.post('/login', function(req, res) {
    let user = req.body.user;
    let password = req.body.password;
    let token = Buffer.from(`${user}:${password}`).toString('base64');

    let dc = password.split("-")[1];
    let url = `https://${dc}.${process.env.CHIMP_URL}`;
    let options = {
        url: url,
        headers: {
            "Authorization": `Basic ${token}`
        }
    }

    
    extRequest(options, (err, response, body) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(response.statusCode).json(body);
        }
    })


    // repository.login(user, password)
    //     .then((response) => {
    //         console.log(response);
    //         res.send(response);
    //     })
    //     .catch((err) => {
    //         res.status(403).send(err);
    //     })
});

module.exports = auth_router;