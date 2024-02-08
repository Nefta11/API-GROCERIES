import { Router } from "express";
import {getAll, insertProduct,getOne,updateProduct,deleteProduct } from '../controllers/products.controller.js'

const router = Router();

router.get('/',getAll);
router.get('/:bc',getOne)
router.post('/', insertProduct);
router.put('/:bc',updateProduct)
router.delete('/:bc',deleteProduct)
export default router;