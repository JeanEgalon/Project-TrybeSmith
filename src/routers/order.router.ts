import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import validateToken from '../middlewares/validateToken';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', (req, res) => orderController.getAll(req, res));
orderRouter.post(
  '/',
  validateToken,
  (req, res) => orderController.createOrder(req, res),
);

export default orderRouter;