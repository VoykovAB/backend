const UserService = require('../services/UserService');

class UsersController {

    /**
     * Return users list
     *
     * @param req
     * @param res
     */
    static getList(req, res) {
        UserService.getList()
            .then((result) => res.status(200).json(result))
            .catch((error) => res.status(500).json({error}));
    }

    /**
     * Create new user
     *
     * @param req
     * @param res
     */
    static create(req, res) {
        UserService.create(req.body)
            .then((result) => res.status(200).json(result))
            .catch((error) => res.status(500).json({error}));
    }

    /**
     * Udpate user data
     *
     * @param req
     * @param res
     */
    static update(req, res) {
        UserService.update(req.body)
            .then((result) => res.status(200).json(result))
            .catch((error) => res.status(500).json({error}));
    }

    /**
     * Delete user from db
     *
     * @param req
     * @param res
     */
    static remove(req, res) {
        UserService.remove(req.body)
            .then((result) => res.status(200).json(result))
            .catch((error) => res.status(500).json({error}));
    }
}

module.exports = UsersController;