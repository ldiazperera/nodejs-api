const repository = require('../repositories/user.repository');

function createUser(req, res) {
    let user = req.body;

    repository.create(user)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

function findUserByID(req, res) {
    let id = req.params.id;

    if (id) {
        repository.findByID(id)
            .then((user) => {
                return res.json(user);
            })
            .catch((err) => {
                return res.status(400).json('Error', err);
            })
    }
}

function listUsers(req, res) {
    repository.findUsers()
        .then((users) => {
            return res.json(users);
        })
        .catch((err) => {
            return res.status(404).json('No users found');
        })
}

function deleteUser(req, res) {
    let userId = req.params.id;

    if (userId) {
        repository.deleteUser(userId)
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}

module.exports = { 
    createUser,
    findUserByID,
    listUsers,
    deleteUser
};