import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl('')
  // });
  public formData = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required]
  })

  constructor(
    public common : CommonService,
    private formBuilder : FormBuilder
  ) { }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    this.common.submitData(this.formData.value);
  }

}
