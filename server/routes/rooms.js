import express from 'express'
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom, updateRoomAvailability } from '../controllers/room.js';
import { checkAdmin } from '../utils/tokenVerify.js';

const router = express.Router()

//POST METHOD
router.post("/:hotelid", checkAdmin,createRoom);

//UPDATE Method

router.put("/:id", checkAdmin,updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//DELETE Method
router.delete("/:id/:hotelid", checkAdmin, deleteRoom);

//GET Method
router.get("/:id", getRoom);

//GET all hotels
router.get("/", getAllRooms);
export default router;


