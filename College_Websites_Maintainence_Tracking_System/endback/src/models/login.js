const mongoose =require('mongoose');
const login = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }


},{collection:'login'})
module.exports = mongoose.model("Login", login);
