import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js'
import userRouter from './routes/users.js'
import hotelsRouter from './routes/hotels.js'
import roomsRouter from './routes/rooms.js'
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
app.use(express.json())// using this to solve the error of sending json object directly to express server...
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/hotels", hotelsRouter)
app.use("/api/rooms", roomsRouter)


