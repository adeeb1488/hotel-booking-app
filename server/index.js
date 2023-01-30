import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

app.listen(process.env.PORT_NUM || 8080, ()=>{
    console.log("CONNECTED!!")
})