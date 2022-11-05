import { RowDataPacket } from 'mysql2';
import mysql from './connection';

import { IUser } from '../interfaces';

export default class LoginModel {
  connection = mysql;

  async findByUserName(username: string): Promise<IUser> {
    const sql = 'SELECT * FROM Trybesmith.Users WHERE username=?';
    
    const [[row]] = await this.connection.execute<IUser[] & RowDataPacket[]>(sql, [username]);
    
    return row;
  }
}
