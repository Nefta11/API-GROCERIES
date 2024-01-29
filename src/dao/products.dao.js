import Product from '../models/products.model.js'
const productDAO={}

productDAO.getAll=async()=>{
    const products= await Product.find();
    return products;
}

productDAO.getOne = async(bc) => {
    const product = await Product.findOne({barcode:bc});
    return product
};

productDAO.insertProduct= async(product)=>{
    const productSaved= new Product (product);
    productSaved.save();
    return true;
}

productDAO.updateProduct=async(barcode,product)=>{
    await Product.findOneAndUpdate({barcode:barcode},Product);
    return true;
}


export default productDAO ;