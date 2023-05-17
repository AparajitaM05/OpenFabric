
import AddProductExport from "../models/AddProduct.js";


//ADD NEW PRODUCT
export const AddProductController = async (req, res, next) => {
  // const userId = res.userId;
  console.log(req.userId );
  const newProduct = new AddProductExport({
    product_name: req.body.product_name,
    price: req.body.price,
    image: req.body.image,
  });

  try {
    const ProductAdded = await newProduct.save(newProduct);
      return res
      .status(200)
      .json({
        productDetails: ProductAdded,
      });
    console.log("New Product Added Successfully");
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
};

//GET ONE
export const getProductById = async (req, res) => {
  try {
    const getProduct = await AddProductExport.findById(req.params.id);
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};


//UPDATE ONE
export const updateProduct = async (req, res) => {
  console.log("product_name", req.body.product_name);
  console.log("id", req.body.id);
  console.log("image", req.body.image);
  // console.log("phone", req.params.phone);
  const { id, product_name, image , price} = req.body;
  if (req.body.id != undefined) {
  // console.log("phone", req.body.phone);

    
    try {
      // const filter = { id };
      const update = { product_name: product_name, image: image, price : price };
      const options = { new: true };
      const updatedUser = await AddProductExport.findOneAndUpdate({_id : id}, update, options);
      res.status(200).json(updatedUser);
    } 
    catch (error) {
      res.status(400).json({ msg: error });
    }
  };

}

//CHECK JWT
export const CheckJWT = async (req, res, next) => {
  console.log(req.body.JWT);

  try {
    const JWTcheck = await newProduct.save(newProduct);
      return res
      .status(200)
      .json({
        JWTcheck: JWTcheck,
      });
    console.log("Authenticed, JWT KEY PASSED");
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
};
