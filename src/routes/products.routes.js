import { Router } from "express";
import {getAll, insertProduct,getOne,updateProduct,deleteProduct } from '../controllers/products.controller.js'

const router = Router();

router.get('/',getAll);
router.get('/getOne/:barcode',getOne)
router.post('/', insertProduct);
router.post('/updateProduct/:barcode',updateProduct)
router.delete('/:barcode',deleteProduct)
export default router;