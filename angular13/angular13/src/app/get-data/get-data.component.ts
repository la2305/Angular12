import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {
  public dataTeacher: any;

  constructor(public httpServerService: HttpServerService) { }


  ngOnInit(): void {
    this.httpServerService.getTeachers().subscribe((data) =>{
      console.log('data teacher: ',data);
      this.dataTeacher = data;
    })
  }

}
