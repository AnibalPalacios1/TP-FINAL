import { Router } from "express";
import { getProducts,createProducts,updateProduct,deleteProduct } from "../controllers/productController.js";

const productRoute=Router()

productRoute.get("/get",getProducts)
productRoute.post("/create",createProducts)
productRoute.put("/update",updateProduct)
productRoute.delete("/delete",deleteProduct)

export default productRoute;
