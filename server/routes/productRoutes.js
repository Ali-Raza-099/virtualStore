import express from 'express';
import Product from '../models/Product.js';
const productRouter = express.Router();

const getProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}

productRouter.route('/').get(getProducts);

export default productRouter;