import { Router } from 'express';
import loginRouter from './login.router';
import orderRouter from './order.router';
import productRouter from './product.router';
import userRouter from './user.router';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);
router.use('/login', loginRouter);

export default router;