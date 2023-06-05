const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  cart: {
    type: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        productId: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        __v: {
          type: Number,
          select: false, // Exclude __v field from query results
        },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
