const repository = require('../repositories/auth.repository');

function login(req, res) {
    let user = req.body.user;
    let password = req.body.password;

    repository.login(user, password)
        .then((response) => {
            console.log(response);
            res.send(response);
        })
        .catch((err) => {
            res.status(403).send(err);
        })
}

module.exports = login;