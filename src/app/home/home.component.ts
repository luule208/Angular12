import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Lưu Lê';
  public age = 25;
  public traicay = ['Táo','Nho', 'Cam', 'Quit','Ổi'];
  constructor() { }

  ngOnInit(): void {
    console.log('trai cay = ' ,this.traicay);
  }

  public changeAge():void{
    console.log(this.age);
  }

}
