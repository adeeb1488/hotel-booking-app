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

const router = express.Router();

//POST METHOD
router.post("/", createHotel);

//UPDATE Method

router.put("/:id", updateHotel);

//DELETE Method
router.delete("/:id", deleteHotel);

//GET Method
router.get("/:id", getHotel);

//GET all hotels
router.get("/", getAllHotels);
export default router;
