import AddProductExport from "../models/AddProduct.js";


// //GET ALL PRODUCTS 
export const getregisteredProduct = async (req, res , next) => {
  try {
    const AddProductExportRes = await AddProductExport.find();
  res.status(200).json(AddProductExportRes);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//DELETE PRODUCTS
export const deleteProduct = async (req, res) => {
  // console.log(req.body.id);
  console.log(req.params.id);
  try {
    const getMessage = await AddProductExport.findById(req.params.id);
    const deleteMessage = await getMessage.delete();
    res.status(200).json(deleteMessage);
  } catch (error) {
    res.status(400).json("ID NOT FOUND", error.message);
  }
};
