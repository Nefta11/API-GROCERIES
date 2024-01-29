import { Router } from "express";
import {getAll, insertProduct,getOne,updateProduct } from '../controllers/products.controller.js'

const router = Router();

router.get('/getAll',getAll);
router.get('/getOne/:bc',getOne)
router.post('/insertProduc', insertProduct);
router.put('/updateProduct/:bc',updateProduct)
export default router;