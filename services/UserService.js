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
    static update(data) {
        return User.update({_id: data['_id']}, data);
    }

    /**
     * Delete user
     *
     * @param data
     * @return {Promise}
     */
    static remove(data) {
        return User.deleteOne(data);
    }
}

module.exports = UserServices;