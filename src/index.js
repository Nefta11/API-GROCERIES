const express=require('express');
const app=express();

app.get('/home',(req,res)=>{
    //Aqui se procesa la peticion y se envia una respuesta
    res.json({
        "status":"Petición por get recibida..."
    });
});

app.get("/getOne/:barcode",(req,res)=>{
    console.log(req.params);
    res.json({
        "status":"Petición por get recibida..."
    }); 
    
});

app.listen(3000,()=>{
    console.log("server on port 3200");
});