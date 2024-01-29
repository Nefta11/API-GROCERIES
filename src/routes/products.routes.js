import { Router } from "express";
import {getAll} from '../controllers/products.controller.js'
import { getOne } from "../controllers/products.controller.js";

const router = Router();

router.get('/getAll',getAll);
router.get('/getOne/:bc',getOne)
export default router;