import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', (req, res) => productController.createProduct(req, res));
productRouter.get('/', (req, res) => productController.getAll(req, res));

export default productRouter;