const mongoose = require('mongoose');

class UserSchema extends mongoose.Schema {

    constructor() {
        super({
            'first_name': String,
            'last_name': String,
            'email': String,
        }, {
            strict: false,
            collection: 'users'
        });
    }

}

module.exports = mongoose.model('User', new UserSchema());

