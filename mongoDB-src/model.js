const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    pfp: String,
    username: [{
        type: Schema.Types.ObjectId,
        ref: "Account"
    }],
    gender: String,
    post: String,
    like: String,
    description: String,
    story: String
});

const UserModel = model("User", UserSchema);

module.exports = UserModel; 