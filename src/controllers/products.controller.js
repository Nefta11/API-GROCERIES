import productDAO from '../dao/products.dao.js'
export const getAll=(req, res)=>{
    productDAO.getAll()
    .then(result=>{
        res.json(result);
    })
    .catch(err=>{
        res.json({
            status:"Servidor no disponible"
        });
    }
        )
    res.json({
        status:"Hola mundo"
    });
}

export const getOne = (req, res) => {
    productDAO.getOne(req.params.bc)
    .then(result => {
        if(result != null)
            res.json(result)
        else
            res.json({status:"Product not found"})
    })
    .catch(err=>res.json({status: "Server unaivalible"}))
}

export const insertProduct=(req,res)=>{
    productDAO.insertProduct(req.body)
    .then(result=>{
        if(result)
            res.json({
                status:"Product Saved"
        })
    })
    .catch(err=>res.json({status: "Servidor no disponible"}))
}
