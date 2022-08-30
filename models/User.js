const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)

}

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
        validate: [validateEmail, 'Please enter a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
    ],
    friends:
        //     ///have to figure out
        [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }

        ]

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
    return this.friends.reduce((total, friend) => total + friend.length + 1, 0);

})

// creates User model using schema 
const User = model('User', UserSchema);

//export User model
module.exports = User;



