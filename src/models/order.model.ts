import { RowDataPacket } from 'mysql2';
import mysql from './connection';

import { IOrder } from '../interfaces';

export default class OrderModel {
  connection = mysql;

  async getAll(): Promise<IOrder[]> {
    const sql = `SELECT o.id, o.userId, json_arrayagg(p.id) as productsIds
                 FROM Trybesmith.Orders as o INNER JOIN Trybesmith.Products as p
                 ON p.orderId = o.id GROUP BY o.id;`;
    
    const [row] = await this.connection.execute<IOrder[] & RowDataPacket[]>(sql);
    
    return row;
  }
}
