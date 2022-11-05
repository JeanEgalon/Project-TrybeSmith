import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';

import { IUser } from '../interfaces';

export default class UserModel {
  connection = mysql;

  async findByUserName(username: string): Promise<IUser> {
    const sql = 'SELECT * FROM Trybesmith.Users WHERE username=?';
    
    const [[row]] = await this.connection.execute<IUser[] & RowDataPacket[]>(sql, [username]);
    
    return row;
  }

  async createUser(user: IUser): Promise<number> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );

    return insertId;
  }

  async findById(id: number): Promise<IUser> {
    const sql = 'SELECT * FROM Trybesmith.Users WHERE id=?';

    const [[rows]] = await this.connection.execute<IUser[] & RowDataPacket[]>(sql, [id]);
    const { username, classe, level, password } = rows;

    return { username, classe, level, password };
  }
}
