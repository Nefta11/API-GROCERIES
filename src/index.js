const express= require('express');
const app=express();
app.use(express.json())


/*

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
*/



baseDeDatos =[{
    "id":0,
    "nombre":"Neftali",
    "apellido":"Vergara"
},
{"id":2,
"nombre":"Avryl",
"apellido":"Salas"}]

app.post("/insertOne",(req,res)=>{

    const newDate= req.body;
    
    baseDeDatos.push(newDate)

    res.json(baseDeDatos)
});



// Ruta GET para obtener un usuario por ID
app.get("/getOne/:id", (req, res) => {
    // Obtener el ID de la solicitud
    const idBuscado = parseInt(req.params.id);
  
    // Buscar el usuario en la base de datos
    const resultado = baseDeDatos.find(usuario => usuario.id === idBuscado);
  
    // Verificar si se encontró el usuario
    if (resultado) {
      res.json(resultado);
    } else {
      res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
  });



app.get("/getAll",(req,res)=>{
   
});



app.delete("/deleteOne/id",(req,res)=>{

});

app.put("/updateOne/id",(req,res)=>{

})




app.listen(3200,()=>{
    console.log("server on port 3200 Siuuu");
});

//soy dos siuuu 
//"result":0101