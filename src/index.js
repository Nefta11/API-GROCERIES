const express=require('express');
const app=express();

app.get('/home',(req,res)=>{
    //Aqui se procesa la peticion y se envia una respuesta
    res.json({
        "status":"Petición por get recibida..."
    });
});

app.post('/home', (req, res) => {
    // Aquí se procesa la petición POST y se envía una respuesta
    res.json({
        "status": "Petición por POST recibida..."
    });
});

app.delete('/home', (req, res) => {
    // Aquí se procesa la petición DELETE y se envía una respuesta
    res.json({
        "status": "Petición por DELETE recibida..."
    });
});


app.listen(3000,()=>{
    console.log("server on port 3200");
});