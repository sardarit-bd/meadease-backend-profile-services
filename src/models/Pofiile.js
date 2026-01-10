import mongoose from "mongoose";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/*************** Define the schema Here ****************/
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        quantity: {
            type: Number,
            default: 0,
            min: 0,
        },
        description: {
            type: String,
            default: "",
            trim: true,
        },
        image: {
            type: String, // Could store image URL or Cloudinary path
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        subcategory: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
        discount: {
            type: Number,
            min: 0,
            max: 100,
            default: 0,
        },
        brand: {
            type: String,
            trim: true,
        },
        color: {
            type: String,
            trim: true,
        },
        size: {
            type: String,
            trim: true,
        },
    },
    { timestamps: true } // Adds createdAt & updatedAt automatically
);

/************** Create model from schema Here ****************/
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

/************** Module export from here **************/
export default Product;
