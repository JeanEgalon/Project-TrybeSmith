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

export const validateUsername = (username: string) => {
  if (!username) {
    throw new HttpException(400, '"username" is required');
  }

  if (typeof username !== 'string') {
    throw new HttpException(422, '"username" must be a string');
  }

  if (username.length < 3) {
    throw new HttpException(422, '"username" length must be at least 3 characters long');
  }
};

export const validateClasse = (classe: string) => {
  if (!classe) {
    throw new HttpException(400, '"classe" is required');
  }

  if (typeof classe !== 'string') {
    throw new HttpException(422, '"classe" must be a string');
  }

  if (classe.length < 3) {
    throw new HttpException(422, '"classe" length must be at least 3 characters long');
  }
};

export const validateLevel = (level: number) => {
  if (level <= 0) {
    throw new HttpException(422, '"level" must be greater than or equal to 1');
  }

  if (!level) {
    throw new HttpException(400, '"level" is required');
  }

  if (typeof level !== 'number') {
    throw new HttpException(422, '"level" must be a number');
  }  
};

export const validatePassword = (password: string) => {
  if (!password) {
    throw new HttpException(400, '"password" is required');
  }

  if (typeof password !== 'string') {
    throw new HttpException(422, '"password" must be a string');
  }

  if (password.length < 8) {
    throw new HttpException(422, '"password" length must be at least 8 characters long');
  }
};

export const validateProductsId = (productsIds: number[]) => {
  if (!productsIds) {
    throw new HttpException(400, '"productsIds" is required');
  }

  if (!Array.isArray(productsIds)) {
    throw new HttpException(422, '"productsIds" must be an array');
  }

  if (productsIds.length < 1) {
    throw new HttpException(422, '"productsIds" must include only numbers');
  }
};
