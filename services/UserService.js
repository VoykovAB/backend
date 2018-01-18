const mongoose = require('mongoose');
const User = mongoose.model('users');

class UserServices {
    static createUser(data, callback) {
        (new User(data)).save((err, res) => callback(err, res)) ;
    }

    static getUsers(callback) {
        User.find({}).exec((err, res) => callback(err, res));
    }

    static updateUser(data, callback) {
        User.update({_id: data['_id']}, data, (err, res) => callback(err, res));
    }

    static destroyUser(data, callback) {
        User.deleteOne(data, (err, res) => callback(err, res));
    }
}

module.exports = UserServices;