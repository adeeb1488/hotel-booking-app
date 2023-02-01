import express from 'express'
import HotelDetails from '../models/hotel.js'

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
export default router;


