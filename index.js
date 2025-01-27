//Entry point

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import productRoute from './src/routes/productRoute.js'
import { connectDB } from './src/db.js'
import { PORT } from './src/config.js'
import categoryRoute from './src/routes/categoryRoute.js'

const app = express();

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  }));


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

connectDB()

app.use("/api/product", productRoute)
app.use("/api/category", categoryRoute)


app.listen(PORT, () => {
    console.log("Server running")
})