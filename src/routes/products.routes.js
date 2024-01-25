import { Router } from "express";
const router = Router();

router.get('getAll',(req,res)=>{
    res.json({
        status:"Hola Jotos"
    });
});

export default router;