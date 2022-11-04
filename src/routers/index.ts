import { Router } from 'express';
import productRouter from './product.router';

const router = Router();

router.use('/products', productRouter);

export default router;