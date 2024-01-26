import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentServiceService } from '../Services/student-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  public studentForm!: FormGroup;
  public formSubmitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentServiceService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      age:"",
      name:""
    })
  }

  public createStudent(): void {
    if (this.studentForm.invalid) {
      this.formSubmitted = true;
      return;
    }
  
    this.studentService.createStudent(this.studentForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['list']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
