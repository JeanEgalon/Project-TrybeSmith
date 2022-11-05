import HttpException from '../shared/http.exception';

export const validateName = (name: string) => {
  if (!name) {
    throw new HttpException(400, '"name" is required');
  }

  if (typeof name !== 'string') {
    throw new HttpException(422, '"name" must be a string');
  }

  if (name.length < 3) {
    throw new HttpException(422, '"name" length must be at least 3 characters long');
  }
};

export const validateAmount = (amount: string) => {
  if (!amount) {
    throw new HttpException(400, '"amount" is required');
  }

  if (typeof amount !== 'string') {
    throw new HttpException(422, '"amount" must be a string');
  }

  if (amount.length < 3) {
    throw new HttpException(422, '"amount" length must be at least 3 characters long');
  }
};
