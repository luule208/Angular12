import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public loginName = 'user';
  public myColor = 'red';
  public result = 0;
  public counter = 0;
  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.result = this.common.Caculate(this.counter);
    this.common.counter++;
  }

}
