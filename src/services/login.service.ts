import UserModel from '../models/user.model';
import HttpException from '../shared/http.exception';

export default class LoginService {
  userModel = new UserModel();

  async login(username: string, password: string) {
    if (!username) {
      throw new HttpException(400, '"username" is required');
    }
    if (!password) {
      throw new HttpException(400, '"password" is required');
    }

    const findUserName = await this.userModel.findByUserName(username);

    if (!findUserName || password !== findUserName.password) {
      throw new HttpException(401, 'Username or password invalid');
    }

    return findUserName;
  }
}