import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  userService = new UserService();

  async createUser(req: Request, res: Response) {
    const user = await this.userService.createUser(req.body);
    const { username } = user;
    
    const newToken = await this.userService.createToken(username);
    
    res.status(201).json({ token: newToken });
  }
}