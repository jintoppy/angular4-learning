import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  @Input()
  product: Product;
  
  constructor() { }

  ngOnInit() {
  }

}
