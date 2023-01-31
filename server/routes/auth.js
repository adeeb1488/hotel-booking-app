import express from 'express'

const router = express.Router()

router.get('/',(req,res) => {
    res.send("Hello, this is the auth route. ")
})
router.get('/signup',(req,res) => {
    res.send("Hello, this is the auth- sign up route. ")
})
export default router;


