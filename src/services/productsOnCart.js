const ProductOnCart = require("../models/productOnCart");

exports.getCart = async () => {
    let Cart = await ProductOnCart.find().lean().exec();
    return Cart;
};
 
exports.getCartCount = async () => {

      const products = await ProductOnCart.find();
  
      let totalCount = 0;
      products.forEach((product) => {
        totalCount += product.quantity;
      });
  
      return totalCount;
};

exports.addToCart = async (requestBody) => {
    const { productId } = requestBody;
    const existingProduct = await ProductOnCart.findOne({ productId });
  
    if (existingProduct) {
        existingProduct.quantity += 1;
        return await existingProduct.save();
    } 
    else {
        const newProduct = new ProductOnCart({
            productId,
            quantity: 1,
        });
        return await newProduct.save();
    }
  };

exports.quitOneFromCart = async (productId) => {
    const product = await ProductOnCart.findOne({ productId });
  
    if (!product) {
        throw new Error("Product not found.");
    }
  
    product.quantity -= 1;
  
    if (product.quantity <= 0) {
        await ProductOnCart.deleteOne({ productId });
    } 
    else {
        await product.save();
    }
  
    return product;
};

exports.deleteCartProduct = async (productId) => {
  try{
    const product = await ProductOnCart.findOne({ productId });
  
    if (!product) {
        throw new Error("Product not found.");
    }

    await ProductOnCart.deleteOne({ productId });
  }catch(error){
    console.log(error);
  }

}