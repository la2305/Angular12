import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {
  public payload = {name:"", age:0};
  constructor(private httpServerService: HttpServerService) { }

  ngOnInit(): void {
  }
  public onSubmit(): void {
    this.httpServerService.postTeacher(this.payload).subscribe(data =>{
      console.log(data);
    },
    (error)=>{
      console.log('lỗi khi gởi yêu cầu', error);
    });
  }
}
