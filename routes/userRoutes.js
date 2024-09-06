import express from "express";
import { create, fetch, update } from "../controller/userController.js";
const route = express.Router();

route.get("/getalluser", fetch)
route.put("/update/:id", update)
route.post("/create", create)

export default route;