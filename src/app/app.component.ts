import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'WM Shopping Cart';
  isOpen: boolean = false;
  users: Array<Object> = [
    {
      name: 'user1',
      age: 10
    },
    {
      name: 'user2',
      age: 20
    }
  ];
  imgUrl: string = "https://www.mykidneedsthat.com/wp-content/uploads/2016/07/kids-playing-wooden-toys-2.jpg";
  color = 'red';
  constructor(){

  }
  sayHello(): void {
    this.isOpen = !this.isOpen;
  }
}
