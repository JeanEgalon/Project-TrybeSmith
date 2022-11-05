import { Request, Response } from 'express';
import { validateAmount, validateName } from '../middlewares/validates';
import ProductService from '../services/product.service';

export default class ProductController {
  productService = new ProductService();

  async createProduct(req: Request, res: Response) {
    const { name, amount } = req.body;
    validateName(name);
    validateAmount(amount);
    const product = await this.productService.createProduct(name, amount);
    
    res.status(201).json(product);
  }

  async getAll(req: Request, res: Response) {
    const result = await this.productService.getAll();

    res.status(200).json(result);
  }
}