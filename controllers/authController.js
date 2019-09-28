const authService = require('../services/authService');
const response = require('../helpers/global').response;




exports.logIn = async(req, res) => {
    const model = req.body;
    let result;
    try {

        result = await authService.userLogin(model);
        if (result.success != true) {
            return res.status(400).json(response(result))
        }
    } catch (error) {
        console.log(error);
    }
    return res.status(400).json(response(result))
};