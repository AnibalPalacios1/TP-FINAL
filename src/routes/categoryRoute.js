import { Router } from "express";
import { getCategories,createCategory } from "../controllers/categoryController.js";

const categoryRoute = Router()

categoryRoute.get("/get", getCategories)
categoryRoute.post("/create", createCategory)

export default categoryRoute;