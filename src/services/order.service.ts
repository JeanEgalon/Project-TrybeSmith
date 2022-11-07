import { RowDataPacket } from 'mysql2';
import OrderModel from '../models/order.model';

export default class OrderService {
  orderModel = new OrderModel();

  async getAll() {
    const allOrders = await this.orderModel.getAll();

    return allOrders;
  }

  async createOrder(id: number): Promise<number> {
    const newOrderId = await this.orderModel.createOrder(id);

    return newOrderId;
  }

  async updateProducts(orderId: number, id: number): Promise<RowDataPacket[]> {
    const product = await this.orderModel.updateProducts(orderId, id);
    return product;
  }
}