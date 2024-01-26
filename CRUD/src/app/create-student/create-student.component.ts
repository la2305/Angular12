import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  public studentForm!: FormGroup;
  public errors: { [key: string]: boolean } = {};

  constructor(
    private formBuilder: FormBuilder,
    private httpServerService: HttpServerService
  ) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      age: ['', Validators.required]
    });
  }

  createStudent() {
    if (this.studentForm.invalid) {
      this.errors = {
        name: this.studentForm.get('name')?.invalid || !this.studentForm.get('name')?.touched,
        age: this.studentForm.get('age')?.invalid || !this.studentForm.get('age')?.touched
      };
      return;
    }

    this.httpServerService.createStudent(this.studentForm.value).subscribe(
      (response) => {
        // Xử lý response thành công
        console.log('Created student:', response);
      },
      (error) => {
        // Xử lý lỗi
        console.error('Error creating student:', error);
      }
    );
  }
}