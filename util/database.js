const mongoose = require("mongoose");

const mongooseConnect = () => {
    return mongoose.connect(
        // "mongodb+srv://tanzeel:tanzeel10@cluster0-09cta.mongodb.net/test?retryWrites=true&w=majority"
        "mongodb+srv://tanzeel:tanzeel10@cluster0-09cta.mongodb.net/test?retryWrites=true&w=majority" , { useNewUrlParser: true }
        );
};

module.exports = mongooseConnect;