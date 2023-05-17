import express from 'express';
import autho from "../middlewares/auth.js";
import { getregisteredProduct, deleteProduct } from '../controllers/gets.js'
const router = express.Router();
import bodyParser from 'body-parser';
var jsonParser = bodyParser.json()



//Get 
router.get('/getProduct', jsonParser, getregisteredProduct);  
router.delete('/deleteproduct/:id',  deleteProduct);  

export default router;