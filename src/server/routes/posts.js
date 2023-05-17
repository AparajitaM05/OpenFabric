import express from 'express';
import { AddProductController, updateProduct, getProductById , CheckJWT} from '../controllers/posts.js';
import { loginauth, registerUsersPost } from '../controllers/registerUserController.js';
import autho from "../middlewares/auth.js";
const router = express.Router();
import bodyParser from 'body-parser';
var jsonParser = bodyParser.json()


//Login JWT CHECK
router.post('/CheckJWT', autho , jsonParser, CheckJWT);


//Products Details Route
router.post('/addproduct' , jsonParser, AddProductController);
router.put('/updateproduct', jsonParser, updateProduct);  
router.get('/getproduct/:id',  getProductById);  



export default router;