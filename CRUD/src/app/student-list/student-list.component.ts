import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public dataStudentList: any;

  constructor(private httpServerService: HttpServerService) { }

  ngOnInit(): void {
    this.httpServerService.getStudentList().subscribe((data) =>{
      console.log(data);
      this.dataStudentList = data;
    })
  }

}
