const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productOnCartSchema = new Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number, 
    required: true,
  }
});

module.exports = mongoose.model("ProductOnCart", productOnCartSchema);
