import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    emai : {
        type : String ,
        required : true,
        unique : true
    },
    password : {
        type : String, 
        required : true
    }
},{timestamps:true})

const User = mongoose.model("User",userSchema);
export default User;
