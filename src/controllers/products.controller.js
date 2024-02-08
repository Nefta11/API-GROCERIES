import { model } from 'mongoose';
import productDAO from '../dao/products.dao.js'

export const getAll = (req, res) => {
    productDAO.getAll()
        .then((products) => {
            res.render('');
        })
        .catch((err) => {
            res.json(err);
        });
};

export const getOne = (req, res) => {
    productDAO.getOne(req.params.bc)
        .then(result => {
            if (result != null)
                res.json(result)
            else
                res.json({ status: "Product not found" })
        })
        .catch(err => res.json({ status: "Server unaivalible" }))
}

export const insertProduct = (req, res) => {
    productDAO.insertProduct(req.body)
        .then(result => {
            if (result)
                res.json({
                    status: "Product Saved"
                })
        })
        .catch(err => res.json({ status: "Servidor no disponible" }));
};

export const updateProduct = (req, res) => {
    productDAO.updateProduct(req.params.bc, req.body)

        .then(result => {
            if (result)
                res.json({
                    status: "Product Updated"
                });
                else
                res.json({
                    status: "server unavailable"
                });
        })
        .catch(err => {
            res.json({
                status: "server unavailable"
            });
        })
};


export const deleteProduct = (req, res) => {
    productDAO.delteProduct(req.params.bc)

        .then(result => {
            if (result)
                res.json({
                    status: "Product deleted"
                });
                else
                res.json({
                    status: "server unavailable"
                });
        })
        .catch(err => {
            res.json({
                status: "server unavailable"
            });
        })
};

