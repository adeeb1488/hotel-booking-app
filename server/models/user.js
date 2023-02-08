import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
    user_name: {
        type:String,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
       default:false
    }
},
{timestamps:true}
)
const UserDetails = new mongoose.model("User",UserSchema)
export default UserDetails