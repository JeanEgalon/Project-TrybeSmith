import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  userService = new UserService();

  async createUser(req: Request, res: Response) {
    const user = await this.userService.createUser(req.body);
    
    const newToken = await this.userService.createToken(user);
    
    res.status(201).json({ token: newToken });
  }
}