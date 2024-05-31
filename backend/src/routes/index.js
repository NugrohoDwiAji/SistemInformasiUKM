import express from "express"
const router = express.Router()
import signupRouter from "./signup.js"


router.use("/signup",signupRouter)

router.use("*",(req, res)=>{
    res.status(404).send("Not Found")
})

export default router;