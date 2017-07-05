import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  product: Product;
  
  constructor(private route: ActivatedRoute, 
  private router: Router
  ) { 
    
  }
  goHome(){
    this.router.navigate(['/profile']);
  }
  ngOnInit() {
    this.route.params
        .subscribe((params:Params) => {
          console.log(params.productId);
        });
  }


}
