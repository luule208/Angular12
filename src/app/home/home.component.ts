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
  public cities = [
    {
      city: 'Chọn thành phố',
      district: ['Quận huyện']
    },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Huyện An Phú'
      ]
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Huyện Côn Đảo'
      ]
    },
  ]
  public district = ['Quận huyện'];
  constructor() { }

  ngOnInit(): void {
    console.log('trai cay = ', this.traicay);
  }

  public changeAge(): void {
    console.log(this.age);
  }

  public changeCity(event: any) {
    console.log('event', event.target.value);
    const city = event.target.value;
    if (!city) {
      return;
    }

    // TODO: cách 1
    // const search = this.cities.filter(data => data.city === city);
    // if (search && search.length > 0) {
    //   this.district = search[0].district;
    // }

    // TODO: cách 2
    this.district = this.cities.find(data => data.city === city)?.district || [];
  }

}
