import HotelDetails from "../models/hotel.js";
import RoomDetails from "../models/rooms.js";
import { createError } from "../utils/errors.js";

export const createRoom = async(req,res,next)=>{
    const hotelId = req.params.hotelid;
    const newRoom = new RoomDetails(req.body);

    try{
        const savedRoom = await newRoom.save();
        console.log(savedRoom)
        try{
            console.log(hotelId)
            await HotelDetails.findByIdAndUpdate(hotelId, {$push:{roooms:savedRoom._id}})
        }
        catch(e)
        {
            next(e)
        }

    res.status(200).json(savedRoom)
    }catch(e)
    {
        next(e)
    }
}
export const updateRoom = async(req,res,next)=>{
    try{
        const updatedRoom = await RoomDetails.findByIdAndUpdate(req.params.id,{$set: req.body}, {new:true})
        res.status(200).json(updatedRoom)
}
catch(e)
{
    next(e)
}
}

export const updateRoomAvailability = async(req,res,next)=>{
    try{
       await RoomDetails.updateOne({"roomNumbers._id":req.params.id}, {
        $push:{
            "roomNumbers.$.unavailableDates":req.body.dates
        }
       })
       res.status(200).json("Room status updated.")
}

catch(e)
{
    next(e)
}
}
export const deleteRoom = async(req,res,next)=>{
    const hotelId = req.params.hotelid;
    try{
        await RoomDetails.findByIdAndDelete(req.params.id)
        try{
            console.log(hotelId)
            await HotelDetails.findByIdAndUpdate(hotelId, {$pull:{roooms:req.params.id}})
        }
        catch(e)
        {
            next(e)
        }
       res.status(200).json("Room has been deleted from the Database...")
}
catch(e)
{
   next(e)
}
}
export const getRoom = async(req,res,next)=>{
    try{
        const get_room = await RoomDetails.findById(req.params.id)
       res.status(200).json(get_room)
}
catch(e)
{
   next(e)
}
}
export const getAllRooms = async(req,res,next)=>{
    try{
        const get_rooms = await RoomDetails.find()
       res.status(200).json(get_rooms)

}
catch(e)
{
   next(e)
}
}