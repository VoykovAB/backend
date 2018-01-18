const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
        'first_name': String,
        'last_name': String,
        'email': String,
    },
    {
        strict: false,
        collection: 'users'
    });

mongoose.model('users', userSchema);
