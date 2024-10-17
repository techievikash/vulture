const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  farmer: {
    type: Schema.Types.ObjectId,
    ref: "Farmer",
    required: true,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "Buyer",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

productSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
