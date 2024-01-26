import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public dataStudentList: any;

  constructor(private studentService: StudentServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getStudentList();
  }

  public getStudentList(): any {
    this.studentService.getStudentList().subscribe((response)=>{
      console.log(response);
      this.dataStudentList = response;
    }, 
    (error)=>{
      console.log(error);
    })
  }
  public deleteStudent(id: number): any {
    this.studentService.deleteStudent(id).subscribe((response) =>{
      console.log(response);
      this.getStudentList();
    }, (error)=>{
      console.log(error);
    })
  }
  public editStudent(id: number): void {
    this.router.navigate(['edit',id]);
  }
}
