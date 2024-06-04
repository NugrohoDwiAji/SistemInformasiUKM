import express from "express"
const router = express.Router()
import signupRouter from "./signup.js"

import loginRouter from "./login.js"
import updateRouter from "./update.js"


router.use("/signup",signupRouter)
router.use("/login",loginRouter)
router.use("/profil",updateRouter)


router.use("*",(req, res)=>{
    res.status(404).send("Not Found")
})

export default router;