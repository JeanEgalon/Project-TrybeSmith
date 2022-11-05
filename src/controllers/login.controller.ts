import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import UserService from '../services/user.service';

export default class LoginController {
  loginService = new LoginService();

  userService = new UserService();

  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    
    const user = await this.loginService.login(username, password);
    const name = user.username;

    const newToken = await this.userService.createToken(name);
    
    res.status(200).json({ token: newToken });
  }
}