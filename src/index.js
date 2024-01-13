const express=require('express');
const app=express();

app.get('/home',(req,res)=>{
    //Aqui se procesa la peticion y se envia una respuesta
    res.json({
        "status":"Petición por get recibida..."
    }
    )
});

app.listen(3200,()=>{
    console.log("server on port 3200");
});