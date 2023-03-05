import jwt from 'jsonwebtoken'
import { createError } from './errors.js'

export const tokenVerify = (req,res,next)=>{
    const token = req.cookies.Access_Token
    if(!token)
    {
        return next(createError(401, "You are not authenticated..."))
    }

    jwt.verify(token,process.env.JWT_KEY, (err, user)=>{
        if(err)
        {
            return next(createError(403, "Token invalid..."))
        }
        req.user = user
        next()
    })

}

export const checkUser =  (req,res,next)=>{
    tokenVerify(req,res, next,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }
        else{
            return next(createError(403, "Not authorized..."))
        }
    })
}
export const checkAdmin =  (req,res,next)=>{
    tokenVerify(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }
        else{
            return next(createError(403, "Not authorized..."))
        }
    })
}