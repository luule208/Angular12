import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QRComponent implements OnInit {
  public title = 'QR';
  public qrInfor = '';
  public baseInfor = '';
  public width = 300;
  public name = '';
  public age = '';

  constructor() {}

  ngOnInit(): void {}
  public changeBase(event: any): void {
    this.baseInfor = event.target.value;
    this.qrInfor = event.target.value;
    this.combine();
  }
  public changeName(event: any): void {
    this.name = event.target.value;
    this.combine();
  }
  public changeAge(event: any): void {
    this.age = event.target.value;
    this.combine();
  }

  private combine(): void {
    const data = JSON.stringify({ name: this.name, age: this.age });
    this.qrInfor = this.baseInfor + '?data=' + data;
    console.log('qrInfor=', this.qrInfor);
  }
}
