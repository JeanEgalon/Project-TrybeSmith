import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
// import { IToken } from '../interfaces';
import HttpException from '../shared/http.exception';

const validateToken = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) {
    throw new HttpException(401, 'Token not found');
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      throw new HttpException(401, 'Invalid token');
    }
    req.body.user = decoded;
  });

  next();
};

export default validateToken;