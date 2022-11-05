import { IProduct } from '../interfaces';
import ProductModel from '../models/product.model';
import HttpException from '../shared/http.exception';

export default class ProductService {
  productModel = new ProductModel();

  async createProduct(product: IProduct) {
    const { name, amount } = product;

    // verifica se o produto já existe no banco de dados
    const findProduct = await this.productModel.findByName(name);

    // caso exista ele retorna o erro
    if (findProduct) {
      throw new HttpException(401, 'Produto já existe no banco de dados');
    }
    
    // caso não exista ele criará o produto
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