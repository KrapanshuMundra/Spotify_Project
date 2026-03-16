const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum:['user','artist'], //enum batata hai ki role ki ek value hogi ya to user ya to artist
        default:'user',
    }
})

const userModel=mongoose.model("user",userSchema)
module.exports=userModel