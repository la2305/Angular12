import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public accountUser  = 'Ladeptrai';
  public myColor = "red";
  public counter = 0;
  public counterBinhPhuong = 0 ;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.getCounter();
    this.counter++;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.setCounter(this.counter);
  }

}
