const mongoose = require("mongoose")

const {Schema,model} = mongoose


const ProductSchema = new Schema({
    ProductName:String,
    ProductPrice:Number,
    ProductDesc:String,
})

const productsTable =  model("ProductTable",ProductSchema)
module.exports = productsTable
