const express= require('express');
const app=express();
app.use(express.json)
app.use(express.json)


app.get('/getAll',(req,res)=>{
    //Aqui se procesa la peticion y se envia una respuesta
    res.json({
        "status":"Petición por get recibida..."
    });
});

app.get("/getOne/:barcode",(req,res)=>{
    console.log(req.params);
    res.json({
        "status":"Petición por get recibida siuu..."
    }); 
    
});

app.get("/IngresaNumero/:numero", (req, res) => {
    const numero = req.params.numero;
    const numEntero = parseInt(numero);

    let binario = "";
    let n = numEntero;
    
    do {
        binario = (n % 2) + binario;
        n = Math.floor(n / 2);
    } while (n > 0);

    res.json({
        status: "Petición por get recibida siuu...",
        binario: binario
    });
});



app.post("/insertProduct",(req,res)=>{
console.log(req.body)
res.json({
    status:"producto insertado"
})

});


app.listen(3200,()=>{
    console.log("server on port 3200 Siuuu");
});

//soy dos siuuu 
//"result":0101