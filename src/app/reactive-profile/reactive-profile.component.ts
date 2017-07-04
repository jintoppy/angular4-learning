import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-profile',
  templateUrl: './reactive-profile.component.html',
  styleUrls: ['./reactive-profile.component.css']
})
export class ReactiveProfileComponent implements OnInit {
  myForm: FormGroup;
  myTitle:string = "Hello";
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      basicInfo: new FormGroup({
        name: new FormControl(null, [
          Validators.required, 
          Validators.minLength(3),
          this.startsWithValidation
          ]),
        age: new FormControl()
      }),
      contactInfo: new FormGroup({
        address: new FormControl(),
        email: new FormControl(null, this.startsWithValidation)
      })
    });
  }
  startsWithValidation(control){
    const inputVal = control.value;
    if(inputVal && inputVal.startsWith('a')){
      return {
        inValidStarting: true
      };
    }
    else{
      return null;  
    }
  }

}
