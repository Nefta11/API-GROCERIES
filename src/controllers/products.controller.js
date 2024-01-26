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