import {Product} from '../models/Product';
export class ProductService{
    products: Product[] = [
      new Product(1,'Oculus Rift',45000),
      new Product(2,'HTC Vive',75000)
    ]
    constructor(){

    }

    getProducts(){
        return this.products;
    }
}