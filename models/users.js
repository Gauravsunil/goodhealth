const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    user_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile_no:{
        type:Number,
        required:true
    }
    
})

module.exports=User=mongoose.model('users',UserSchema);