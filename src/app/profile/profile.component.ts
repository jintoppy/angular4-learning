import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  myname: string = "Trial";
  onKeyUp(){
    if(this.myname === ""){
      this.myname = "Trial";
    }
  }
}
