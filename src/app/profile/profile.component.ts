import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild('f')
  myForm: NgForm;
  onSubmit(form){
    if(form.valid){
      console.log(form.value);
    }
    else{
      alert('not valid');
    }
  }

  onSetValue(){
    this.myForm.form.setValue({
      username: 'custom',
      password: 'custom'
    });

    // this.myForm.form.patchValue({
    //   username: 'custom'
    // });

  }

}
