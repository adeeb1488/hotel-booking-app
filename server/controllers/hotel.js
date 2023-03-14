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
    const {min,max,...others} = req.query
    try{
        const get_hotels = await HotelDetails.find({...others,cheapestPrice:{$gt:min | 1,$lt:max || 999 }}).limit(req.query.limit)
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

export const countByType = async(req,res,next)=>{
    try{
        const hotelCount = await HotelDetails.countDocuments({hotel_type:"hotel"})
        const apartmentCount =await HotelDetails.countDocuments({hotel_type:"apartment"})
        const resortCount =await HotelDetails.countDocuments({hotel_type:"resort"})
        const villaCount =await HotelDetails.countDocuments({hotel_type:"villa"})
        const cabinCount =await HotelDetails.countDocuments({hotel_type:"cabin"})
     
       res.status(200).json([
        {hotel_type:"hotel",count:hotelCount },
        {hotel_type:"apartments",count:apartmentCount },
        {hotel_type:"resorts",count:resortCount },
        {hotel_type:"villas",count:villaCount },
        {hotel_type:"cabins",count:cabinCount }
       ])

}
catch(e)
{
   next(e)
}
}