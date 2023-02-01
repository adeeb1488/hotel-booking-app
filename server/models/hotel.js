import mongoose from "mongoose";


const HotelSchema = new mongoose.Schema(
    {
    hotel_name: {
        type:String,
        required: true  
    },
    hotel_type:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true 
    },
    hotel_address:{
        type:String,
        required:true 
    },
    distance:{
        type:String,
        required:true 
    },
    images:{
        type:[String],
        
    },
    hotel_title:{
        type:String,
        required:true
    },
    hotel_description:{
        type:String,
        required:true   
    },
    hotel_rating:{
        type:Number,
        min:0,
        max:5     
    },
    roooms:{
        type:[String],       
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
       default:false
    }
}
)
const HotelDetails = new mongoose.model("Hotel",HotelSchema)
export default HotelDetails