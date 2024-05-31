import express from "express"
import { testConnection } from "../database/connection.js"
import cors from "cors"

const app = express()
const port = 3000
app.use(cors())

import router from "./routes/index.js"
import bodyParser from "body-parser"
import multer from "multer"
const upload = multer()

import cookieParser from "cookie-parser"
import session from "express-session"
import expressEjsLayouts from 'express-ejs-layouts'

import path from "path"
import url from 'url'
const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")
app.use(expressEjsLayouts)
app.use(express.static(path.join(__dirname, "../public")))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(upload.array())
app.use(cookieParser())
app.use(
    session({
        secret:"secret key",
        resave:false,
        saveUninitialized:false
    })
)
testConnection()


app.use(router)

app.listen(port, ()=>{
    console.log(`Server Berjalan di http://localhost:${port}`)
})