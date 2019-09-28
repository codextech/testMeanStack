const globalHelper = require('../helpers/global');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const response = require('../helpers/global').response;



exports.userLogin = async(user) => {

    let token;
    try {
        const result = await User.validateUser(user);

        if (result.error == null) { // user valid
            let foundUser = await globalHelper.findUserByEmail(user.email);
            if (foundUser) { // user found
                const passMatch = await bcrypt.compareSync(user.password, foundUser.password);
                if (passMatch) { // password match
                    token = await User.generateAuthToken(foundUser);
                } else {

                    return response(false, "Wrong Password", null);
                }
            } else {
                return response(false, "No User Found", null);
            }
        } else { // not valid
            return response(false, result.error.details[0].message, null);
        }
    } catch (error) {
        console.log(error);
    }
    return response(true, null, token);

}