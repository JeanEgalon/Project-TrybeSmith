import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';

import { IFindProduct } from '../interfaces';

// Classes
export default class ProductModel {
  connection = mysql;

  async findByName(name: string): Promise<IFindProduct> {
    const sql = 'SELECT * FROM Trybesmith.Products WHERE name=?';
    
    const [[row]] = await this.connection.execute<IFindProduct[] & RowDataPacket[]>(sql, [name]);
    
    return row;
  }

  async createProduct(name: string, amount: string): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
      [name, amount],
    );

    return insertId;
  }

  async findById(id: number): Promise<IFindProduct> {
    const sql = 'SELECT * FROM Trybesmith.Products WHERE id=?';

    const [[rows]] = await this.connection.execute<IFindProduct[] & RowDataPacket[]>(sql, [id]);
    const { name, amount } = rows;

    return { name, amount };
  }
}
