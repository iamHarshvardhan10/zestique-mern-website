import mongoose from "mongoose";

const menuListingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        calories: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        serving: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        veg: {
            type: Boolean,
            required: true
        },
        nonVeg: {
            type: Boolean,
            required: true
        },
        breakfast: {
            type: Boolean,
            required: true
        },
        lunch: {
            type: Boolean,
            required: true
        },
        dinner: {
            type: Boolean,
            required: true
        },
        appetizer: {
            type: Boolean,
            required: true
        },
        salad: {
            type: Boolean,
            required: true
        },
        sweets: {
            type: Boolean,
            required: true
        },
        drinks: {
            type: Boolean,
            required: true
        },
        foodPair: {
            type: Array,
            required: true
        },
        imageUrls: {
            type: Array,
            required: true
        }
    }, { timestamps: true }
)


const Menu = new mongoose.model('Menu', menuListingSchema)

export default Menu;