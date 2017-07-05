import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];
  selectedProduct: Product;
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.products = this.service.getProducts();
  }

  onProductSelect(p){
    this.selectedProduct = p
  }

}
