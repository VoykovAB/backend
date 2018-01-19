const mongoose = require('mongoose');
const User = mongoose.model('User');

class UserServices {

    /**
     * Create user
     *
     * @param data
     * @return {Promise}
     */
    static create(data) {
        return (new User(data)).save();
    }

    /**
     * Get users list
     *
     * @return {Promise}
     */
    static getList() {
        return User.find({}).exec();
    }

    /**
     * Update user
     *
     * @param data
     * @return {Promise}
     */
    static update(id, data) {
        return User.update({_id: id}, data);
    }

    /**
     * Delete user
     *
     * @param data
     * @return {Promise}
     */
    static remove(id) {
        return User.deleteOne({_id: id});
    }
}

module.exports = UserServices;