const mongoose= require('mongoose');


const messageModel = mongoose.Schema({

    name: {type:String, required:true},
    email:{type:String, required:true, unique:true},
    password: {type:String, required:true},
    pic: {type:String, default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"},

},
{timestamps:true});

const User = mongoose.model("Message", messageModel);

module.exports = messageModel;