import express from "express";
import { getProfil, profil, upload } from "../controlers/profilController.js";

const updateRouter= express.Router();

updateRouter
.route("/")
.put(upload, profil)
updateRouter
.route("/:email")
.get(getProfil)

export default updateRouter