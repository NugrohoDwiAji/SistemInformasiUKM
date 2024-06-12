import express from "express";
const ukmRouter = express.Router();

import { createUkm, updateDetailUkm } from "../controllers/ukmController.js";
import { upload } from "../middleware/saveImg.js";

ukmRouter
.route("/")
.post(createUkm)
.put(upload.single("img"),updateDetailUkm)


export default ukmRouter