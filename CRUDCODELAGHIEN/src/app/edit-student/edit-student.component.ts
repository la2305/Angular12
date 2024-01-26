import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../Services/student-service.service';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  public studentForm! : FormGroup;

  constructor(
    private router: Router,
    private studentService: StudentServiceService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    const studentId = this.route.snapshot.params.id;
    this.getStudentById(studentId);
    this.studentForm = this.formBuilder.group({
      id: studentId,
      name: ['', Validators.required],
      age: ['', Validators.required]
    })
  }

  public getStudentById(id: number) {
    this.studentService.getStudentById(id).subscribe(
    (response) =>{
      this.studentForm.patchValue(response);
    },(error)=>{
      console.log(error);
    })
  }
  public submit() {
    if (this.studentForm.invalid){
      return;
    }
    this.studentService.editStudent(this.studentForm.value).subscribe(
    (response) =>{
      console.log(response);
      this.router.navigate(["/list"]);
    },
    (error)=>{
      console.log(error);
    })
  }
}
