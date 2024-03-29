import express from "express";
import { get } from "mongoose";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  getHotelRooms,
  updateHotel,
} from "../controllers/hotel.js";
import HotelDetails from "../models/hotel.js";
import { createError } from "../utils/errors.js";
import { checkAdmin } from "../utils/tokenVerify.js";


const router = express.Router();

//POST METHOD
router.post("/", checkAdmin,createHotel);

//UPDATE Method

router.put("/:id", checkAdmin,updateHotel);

//DELETE Method
router.delete("/:id", checkAdmin, deleteHotel);

//GET Method
router.get("/find/:id", getHotel);

//GET all hotels
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
export default router;
