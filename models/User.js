const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
import { isEmail } from 'validator';

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [isEmail, 'invalid email']
    },
    thoughts: [
        {
            type: Schema, Types, ObjectId,
            ref: 'Thought'
        }
    ],
    friends: {
        ///have to figure out

    }
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// gets count of users friends 
UserSchema.virtual('friendCount').get(function () {
    return this.friends.reduce((total, friend) => total + friend.??.length + 1, 0);

})

// creates User model using schema 
const User = model('User', UserSchema);

//export User model
model.exports = User



