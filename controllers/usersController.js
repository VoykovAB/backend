const UserService = require('../services/UserService');

class UsersController {
    static onResponse(err, result, res) {
        if (err) {
            return res.status(500).json({error: err});
        }

        return res.status(200).json(result);
    }

    static getUsers(req, res) {
        UserService.getUsers((err, result) => this.onResponse(err, result, res));
    }

    static createUser(req, res) {
        UserService.createUser(req.body, (err, result) => this.onResponse(err, result, res));
    }

    static updateUser(req, res) {
        UserService.updateUser(req.body, (err, result) => this.onResponse(err, result, res));
    }

    static destroyUser(req, res) {
        UserService.destroyUser(req.body, (err, result) => this.onResponse(err, result, res));
    }
}

module.exports = UsersController;