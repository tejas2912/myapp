import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string='tejas';
  num1: number=40;
  num2:number=10;
  total:number=0;
  add()
  {
    this.total=this.num1+this.num2;
  }
  sub()
  {
    this.total=this.num1-this.num2;
  }
  mul()
  {
    this.total=this.num1*this.num2;
  }
  div()
  {
    this.total=this.num1/this.num2
  }
}
