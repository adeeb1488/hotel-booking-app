import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.js';
import { checkAdmin, checkUser, tokenVerify } from '../utils/tokenVerify.js';

const router = express.Router()

//-------------USER/ADMIN VERIFICATION LOGIC------------------------
// router.get("/checkauth", tokenVerify,(req,res,next)=>{
//     res.send("Hey! You are logged in...")
// })
// router.get("/checkuser/:id", checkUser,(req,res,next)=>{
//     res.send("Hey! You are logged in... You can delete your account")
// })
// router.get("/checkadmin/:id", checkAdmin,(req,res,next)=>{
//     res.send("Hey! You are an Admin... You can delete all accounts")
// })
//------------------------------------------------------------------


//UPDATE Method

router.put("/:id", checkUser, updateUser);

//DELETE Method
router.delete("/:id",checkUser, deleteUser);

//GET Method
router.get("/:id",checkUser, getUser);

//GET all 
router.get("/", checkAdmin, getAllUsers);
// router.get('/signup',(req,res) => {
//     res.send("Hello, this is the auth- sign up route. ")
// })
export default router;


