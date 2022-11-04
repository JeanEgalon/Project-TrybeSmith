import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  productService = new ProductService();

  async createProduct(req: Request, res: Response) {
    const product = await this.productService.createProduct(req.body);
    
    res.status(201).json(product);
  }
}