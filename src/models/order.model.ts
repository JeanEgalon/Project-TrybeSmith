import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

  async createOrder(id: number): Promise<number> {
    const sql = 'INSERT INTO Trybesmith.Orders (userId) VALUES(?)';

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(sql, [id]);
    return insertId;
  }

  async updateProducts(orderId: number, id: number): Promise<RowDataPacket[]> {
    const sql = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    const [row] = await this.connection.execute<RowDataPacket[]>(sql, [orderId, id]);
    
    return row;
  }
}
