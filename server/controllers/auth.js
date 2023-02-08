import UserDetails from "../models/user.js"
import bcrypt from 'bcryptjs'

export const signup = async(req,res,next) =>{
    try{
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)
        const newUser = new UserDetails({
            user_name:req.body.user_name,
            email:req.body.email,
            password:hash,
        })
        await newUser.save()
        res.status(201).send("User created successfully!")
    }
    catch(e){
        next(e)
    }
}