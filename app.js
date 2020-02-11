const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user_routes = require('./routes/user.route');
const auth_routes = require('./routes/auth.route');

app.use(bodyParser.json());
app.use('/api', user_routes);
app.use(auth_routes);

module.exports = app;
