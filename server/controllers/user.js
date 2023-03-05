import UserDetails from "../models/user.js"

export const updateUser = async(req,res,next)=>{
    try{
        const updateUser = await UserDetails.findByIdAndUpdate(req.params.id,{$set: req.body}, {new:true})
        res.status(200).json(updateUser)
}
catch(e)
{
    next(e)
}
}
export const deleteUser = async(req,res,next)=>{
    try{
        await UserDetails.findByIdAndDelete(req.params.id)
       res.status(200).json("User has been deleted from the Database...")
}
catch(e)
{
   next(e)
}
}
export const getUser = async(req,res,next)=>{
    try{
        const get_user = await UserDetails.findById(req.params.id)
       res.status(200).json(get_user)
}
catch(e)
{
   next(e)
}
}
export const getAllUsers = async(req,res,next)=>{
    try{
        const get_users = await UserDetails.find()
       res.status(200).json(get_users)

}
catch(e)
{
   next(e)
}
}