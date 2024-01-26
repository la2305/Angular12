import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  public counter = 0;
  public counterBinhPhuong = 0;

  constructor(public common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.getCounter();
    this.counter++;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.setCounter(this.counter);
  }

}
