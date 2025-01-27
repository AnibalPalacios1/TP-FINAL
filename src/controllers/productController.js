import Product from "../models/productModel.js";

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find()
        if (products.length===0){
            return res.status(204)
        }
        return res.status(200).json(products)
    }
    catch (error){
        return res.status(500).json({message:"Internal Server Error",error})

    }
}

export const createProducts = async(req,res)=> {
    try {
        const {sku} = req.body
        const productExist= await Product.findOne({sku})
        if (productExist)
            return res.status(400).json({message:"Product already Exist"});
        const newProduct = new Product(req.body);
        const response = await newProduct.save();
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error",error});
    }
}

export const deleteProduct = async(req,res)=> {
    try {
      const id  = req.params.id
      const productExist=await Product.findOne({_id:id});
      if (!productExist)
        return res.satus(404).json({message:"Product Not Found"});
      await Product.findByIdAndDelete(id) ;
      res.status(201).json({message:"Product deleted successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",error});
        
    }
}


export const updateProduct =async(req,res)=> {
    try {
        const {sku} = req.body
        const productExist= await Product.findOne({sku})
        if (!productExist)
            return res.status(404).json({message:"Product not found"});
       // const updateProduct = await Product.findByIdAndUpdate({ sku }, req.body, {new: true})
        const updateProduct = await Product.updateOne( {sku}, req.body, {new: true} )

        res.status(201).json(updateProduct)

    } catch (error) {
        res.status(500).json({message:"Internal Server Error",error});
    }
}