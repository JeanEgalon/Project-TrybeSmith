import { IFindProduct } from '../interfaces/index';
import ProductModel from '../models/product.model';

export default class ProductService {
  productModel = new ProductModel();

  async createProduct(name: string, amount: string): Promise<IFindProduct> {
    const createProduct = await this.productModel.createProduct(name, amount);
    const id = createProduct;

    const findProductById = await this.productModel.findById(id);
    const result = { id, ...findProductById };

    return result;
  }

  async getAll() {
    const result = await this.productModel.getAll();
    return result;
  }
}