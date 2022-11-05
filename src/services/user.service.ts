import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';
import UserModel from '../models/user.model';
import HttpException from '../shared/http.exception';

export default class UserService {
  userModel = new UserModel();

  async createUser(user: IUser) {
    const createNewUser = await this.userModel.createUser(user);
    const id = createNewUser;

    const findProductById = await this.userModel.findById(id);
    const result = { id, ...findProductById };

    return result;
  }

  async createToken(username: string) {  
    const findUser = await this.userModel.findByUserName(username);
    const { id, classe, level } = findUser;

    if (!findUser) {
      throw new HttpException(401, 'Usuário não encontrado');
    }

    // se existir cria o token
    const token = jwt.sign({
      id, username, classe, level,
    }, process.env.JWT_SECRET as string);

    return token;
  }
}