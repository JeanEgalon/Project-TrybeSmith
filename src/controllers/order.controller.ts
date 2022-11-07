import { Request, Response } from 'express';
import { validateProductsId } from '../middlewares/validates';
import OrderService from '../services/order.service';

export default class OrderController {
  orderService = new OrderService();

  async getAll(req: Request, res: Response) {
    const user = await this.orderService.getAll();
    
    res.status(200).json(user);
  }

  async createOrder(req: Request, res: Response) {
    const { productsIds } = req.body;
    const { id } = req.body.user;

    validateProductsId(productsIds);
    
    const orderId = await this.orderService.createOrder(id);

    await Promise.all(productsIds.map(async (product: number) => {
      const result = await this.orderService.updateProducts(orderId, product);      
      return result;
    }));

    return res.status(201).json({ userId: id, productsIds });
  }
}