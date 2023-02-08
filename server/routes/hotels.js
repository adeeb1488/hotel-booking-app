import express from 'express'
import { get } from 'mongoose'
import HotelDetails from '../models/hotel.js'
import { createError } from '../utils/errors.js'

const router = express.Router()

//POST METHOD
router.post('/', async(req,res)=>{

const newHotel = new HotelDetails(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
}
catch(e)
{
    console.log(e)
}
})

//UPDATE Method

router.put('/:id', async(req,res)=>{
    try{
        const updateHotel = await HotelDetails.findByIdAndUpdate(req.params.id,{$set: req.body}, {new:true})
        res.status(200).json(updateHotel)
}
catch(e)
{
    console.log(e)
}
}
)

//DELETE Method
router.delete('/:id', async(req,res)=>{
    try{
         await HotelDetails.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted from the Database...")
}
catch(e)
{
    console.log(e)
}
}
)

//GET Method
router.get('/:id', async(req,res)=>{
    try{
         const get_hotel = await HotelDetails.findById(req.params.id)
        res.status(200).json(get_hotel)
}
catch(e)
{
    console.log(e)
}
}
)

//GET all hotels
router.get('/', async(req,res,next)=>{
 
    try{
         const get_hotels = await HotelDetails.find()
        res.status(200).json(get_hotels)

}
catch(e)
{
    next(e)
}
}
)
export default router;


