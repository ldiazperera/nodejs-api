const userModel = require('../models/user.model');

function create(user) {
    return userModel.create(user);
}

function findByID(userId) {
    return userModel.findById(userId);
}

function findUsers() {
    return userModel.find({});
}

function deleteUser(userID) {
    return userModel.findByIdAndDelete(userID);
}

let userOperations = {
    create: create,
    findByID: findByID,
    findUsers: findUsers,
    deleteUser: deleteUser
}
module.exports = userOperations;