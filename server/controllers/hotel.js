import HotelDetails from "../models/hotel.js"

export const createHotel = async(req,res,next)=>{
    const newHotel = new HotelDetails(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
}
catch(e)
{
    next(e)
}
}
export const updateHotel = async(req,res,next)=>{
    try{
        const updateHotel = await HotelDetails.findByIdAndUpdate(req.params.id,{$set: req.body}, {new:true})
        res.status(200).json(updateHotel)
}
catch(e)
{
    next(e)
}
}
export const deleteHotel = async(req,res,next)=>{
    try{
        await HotelDetails.findByIdAndDelete(req.params.id)
       res.status(200).json("Hotel has been deleted from the Database...")
}
catch(e)
{
   next(e)
}
}
export const getHotel = async(req,res,next)=>{
    try{
        const get_hotel = await HotelDetails.findById(req.params.id)
       res.status(200).json(get_hotel)
}
catch(e)
{
   next(e)
}
}
export const getAllHotels = async(req,res,next)=>{
    try{
        const get_hotels = await HotelDetails.find()
       res.status(200).json(get_hotels)

}
catch(e)
{
   next(e)
}
}

export const countByCity = async(req,res,next)=>{
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=>{
            return HotelDetails.countDocuments({city:city})
        }))
       res.status(200).json(list)

}
catch(e)
{
   next(e)
}
}