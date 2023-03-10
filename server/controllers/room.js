import HotelDetails from "../models/hotel.js";
import RoomDetails from "../models/rooms.js";
import { createError } from "../utils/errors.js";

export const createRoom = async(req,res,next)=>{
    const hotelId = req.params.hotelid;
    const newRoom = new RoomDetails(req.body);

    try{
        const savedRoom = await newRoom.save();
        try{
            await HotelDetails.findByIdAndUpdate(hotelId, {$push:{rooms:savedRoom._id}})
        }
        catch(e)
        {
            next(e)
        }

    res.status(200).json(savedRoom)
    }catch(e)
    {
        next(err)
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
export const deleteRoom = async(req,res,next)=>{
    try{
        await RoomDetails.findByIdAndDelete(req.params.id)
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