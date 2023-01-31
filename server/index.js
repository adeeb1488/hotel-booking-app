import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js'
const app = express()
dotenv.config()

const connect_DB = async()=>{
    try{
        await mongoose.connect(process.env.DB_CONNECTION)
        console.log("DB Connected!")
    }catch(e){
        console.log(e)
    }
}


app.listen(process.env.PORT_NUM || 8080, ()=>{
    console.log(`Server connected on port: ${process.env.PORT_NUM}`)
    connect_DB()
})
//middleware
app.use("/auth", authRouter)

