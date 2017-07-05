import {Injectable} from '@angular/core';
import {Product} from '../models/Product';
import {Response} from '@angular/http';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductService{
    constructor(private http: Http){

    }

    getProducts(){
        return this.http
                    .get('http://www.mocky.io/v2/595c9603110000d70009887b')
                    .map((res: Response) => {
                        return res.json();
                    });

                    
                    
    }
}