import { Request, Response } from 'express';
import {
  validateClasse, validateLevel,
  validatePassword, validateUsername,
} from '../middlewares/validates';
import UserService from '../services/user.service';

export default class UserController {
  userService = new UserService();

  async createUser(req: Request, res: Response) {
    const { username, classe, level, password } = req.body; 
    validateUsername(username);
    validateClasse(classe);
    validateLevel(level);
    validatePassword(password);
    const user = await this.userService.createUser(req.body);
    const nome = user.username;
    
    const newToken = await this.userService.createToken(nome);
    
    res.status(201).json({ token: newToken });
  }
}