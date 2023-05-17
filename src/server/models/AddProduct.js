import mongoose from "mongoose";
const { Schema } = mongoose;
// import { Date } from "mongoose";
var datetime = new Date();
//schema mongoose
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var newdate = year + "/" + month + "/" + day;

const AddProduct = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdDate: {
    type: String,
    required: true,
    default: () => newdate,
  },
});



const AddProductExport  = mongoose.model("AddProductExport", AddProduct);
export default AddProductExport;

