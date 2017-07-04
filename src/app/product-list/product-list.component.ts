import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];
  selectedProduct: Product;
  constructor() { }

  ngOnInit() {
    this.products = [
      {
        id: 1,
        title: 'Oculus Rift',
        price: 45000
      },
      {
        id: 2,
        title: 'HTC Vive',
        price: 75000
      }
    ]
  }

  onProductSelect(p){
    this.selectedProduct = p
  }

}
