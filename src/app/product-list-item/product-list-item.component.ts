import { Component, 
          Input,
          OnInit,
          EventEmitter, 
          Output } from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent  implements OnInit{
  @Input()
  product: Product;

  @Output()
  onSelect: EventEmitter<Product> = new EventEmitter<Product> ();

  onBtnClick(p){
    this.onSelect.emit(p);
  }

  ngOnInit(){
    
  }

}
