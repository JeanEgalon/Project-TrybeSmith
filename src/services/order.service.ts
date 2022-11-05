import OrderModel from '../models/order.model';

export default class OrderService {
  orderModel = new OrderModel();

  async getAll() {
    const allOrders = await this.orderModel.getAll();

    return allOrders;
  }
}