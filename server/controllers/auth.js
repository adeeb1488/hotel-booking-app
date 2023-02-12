import UserDetails from "../models/user.js"
import bcrypt from 'bcryptjs'
import { createError } from "../utils/errors.js"
import jwt from "jsonwebtoken"

export const signup = async(req,res,next) =>{
    try{
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)
        const newUser = new UserDetails({
            user_name:req.body.user_name,
            email:req.body.email,
            password:hash,
        })
        console.log(newUser)
        await newUser.save()
        res.status(201).send("User created successfully!")
    }
    catch(e){
        next(e)
    }
}
export const signin = async(req,res,next) =>{
    try{
      const user = await UserDetails.findOne({
        user_name:req.body.user_name
      })
      console.log(user)
      if(!user)
      {
        return next(createError(404,"User not found. Please try again..."))
      }
      const passwordValid = await bcrypt.compare(req.body.password, user.password)
      if(!passwordValid) 
      {
        return next(createError(400,"Incorrect Password. Please try again..."))
      }
      const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.JWT_KEY)
      
        //for not displaying the password in response
        const{password, isAdmin, ...otherDetails} = user._doc
      res.cookie("Access_Token ",token,{
        httpOnly:true
      }).status(200).json({...otherDetails})
    }
    catch(e){
        next(e)
    }
}