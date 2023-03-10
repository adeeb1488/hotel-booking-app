import mongoose from "mongoose";


const RoomSchema = new mongoose.Schema(
    {
    title: {
        type:String,
        required: true,
     
    },
    price:{
        type:Number,
        required:true,
        
    },
    Capacity:{
        type:Number,
        required:true,
        
    },
    description:{
        type:String,
        required:true
    },
    roomNumbers:
        [{number:Number, unavailableDates:{type:[Date]}}]
    
},
{timestamps:true}
)
const RoomDetails = new mongoose.model("Rooms",RoomSchema)
export default RoomDetails