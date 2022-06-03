import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Lưu Lê';
  public age = 25;
  public traicay = ['Táo', 'Nho', 'Cam', 'Quit', 'Ổi'];
  public traicay2 = [
    { ten: 'Táo', gia: 12, hagia: true },
    { ten: 'Nho', gia: -1.241, hagia: false },
    { ten: 'Cam', gia: 8, hagia: true },
  ];
  constructor() { }

  ngOnInit(): void {
    console.log('trai cay = ', this.traicay);
  }

  public changeAge(): void {
    console.log(this.age);
  }

}
