const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('@hapi/joi');

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lastLogin: Date,
    isAdmin: Boolean
});



//custom methods 
userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ _id: this._id, email: this.email, isAdmin: this.isAdmin }, config.get('jwtprivatekey')); //get the private key from the config file -> environment variable
    return token;
}

userSchema.methods.validateUser = (user) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(3).max(255).required()
    });

    return Joi.validate(user, schema);
}

const User = mongoose.model('users', userSchema);

module.exports = User;