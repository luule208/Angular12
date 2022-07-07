import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  public parentMessage = '';
  @ViewChild('ABC') ABC: ChildComponent | undefined;
  @ViewChild('XYZ') XYZ: ChildComponent | undefined;
  constructor() {}

  ngOnInit(): void {}
  public helloChild(name: string) {
    console.log('Who is call me?', name);
    this.parentMessage = 'hello child ' + name;
  }
  public giveMoney() {
    this.ABC?.takeMoney(10);
    this.XYZ?.takeMoney(20);
  }
}
