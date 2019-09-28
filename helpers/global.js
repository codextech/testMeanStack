const User = require('../models/user');



// find user 
exports.findUserById = async(id) => {

    let user;
    try {
        user = await User.findById(id);
    } catch (error) {
        console.log(error);
    }
    return user;
}

exports.findUserByEmail = async(email) => {

    let user;
    try {
        user = await User.findOne({ email: email });
    } catch (error) {
        console.log(error);
    }
    return user;
}










/* Response Handler */

const response = (success, message, data) => {
    return {
        success: success,
        message: message,
        data: data
    };
};

exports.response = response;
// exports.serviceResponse = serviceResponse;