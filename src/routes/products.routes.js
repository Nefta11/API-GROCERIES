import { Router } from "express";
import {getAll, insertProduct,getOne,updateProduct,deleteProduct } from '../controllers/products.controller.js'

const router = Router();

router.get('/',getAll);
router.get('/:barcode',getOne)
router.post('/', insertProduct);
router.post('/:barcode',updateProduct)
router.get('/De/:barcode',deleteProduct)
export default router;