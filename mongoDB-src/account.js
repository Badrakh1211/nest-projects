const { model, Schema } = require("mongoose");

const AccountSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        minlenght: [6, 'username is too short'],
        maxlenght: [20, 'username is too long']
    },
    password: {
        type: String,
        required: [true, 'password input is empty'],
        minlenght: [6, "password is too short"],
        maxlenght: [30, 'password is too long']
    },
    gender: String,
    pfp: String,
    role: String
});

const AccountModel = model("Account", AccountSchema);

module.exports = AccountModel; 