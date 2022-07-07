import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  // public formData: FormGroup = new FormGroup({
  //   userName: new FormControl(''),
  //   age: new FormControl(''),
  // });
  public formData2 = this.formBuilder.group({
    userName: ['', Validators.required],
    age: ['', Validators.required],
  });
  constructor(
    private common: CommonService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
  public onSubmit(): void {
    console.log('Reactive Form: ', this.formData2.value);
    this.common.submitData(this.formData2.value);
  }
}
