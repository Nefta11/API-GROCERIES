import Product from '../models/products.model.js'
export const getAll=async()=>{
const products= await Product.find();
return products;
}