import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() name: string = '';
  @Output() childCall: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  public helloParent() {
    console.log('hello parent');
    this.childCall.emit(this.name);
  }

  public takeMoney(amount: number) {
    console.log('name is ' + this.name + ' thanks for ' + amount + ' $');
  }
}
