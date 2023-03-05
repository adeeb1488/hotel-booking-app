import express from "express";
import { get } from "mongoose";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
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
router.get("/:id", getHotel);

//GET all hotels
router.get("/", getAllHotels);
export default router;
