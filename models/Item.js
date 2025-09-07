import mongoose from "mongoose";

const categories = ["electronics", "clothing", "books"];
const itemSchema = new mongoose.Schema({
   name: { type: String, required: [true, "Item name is required"]},
    description: { type: String},
    price: { type: Number, required: [true, "Price is required"], min: [0, "Price cannot be negative"]},
    category: {type: String, required: [true, "Category is required"], default: "electronics", enum: categories},
    stock: { type: Number, default: 0, min: [0, "Stock cannot be negative"]},
    brand: { type: String },
    ratings: {type: Number, default: 0, min: 0, max: 5},
  },
  { timestamps: true } 
);

const Item = mongoose.model("Item", itemSchema);

export default Item;