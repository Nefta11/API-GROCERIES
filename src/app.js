import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
config();
import ejs from 'ejs'
import productsRouter from './routes/products.routes.js'

const app = express();

// Configuración del motor de vistas
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Utiliza el enrutador de productos sin prefijo
app.use(productsRouter);

export default app;
