import { Component, OnInit, ViewChild } from '@angular/core';
import { ConComponent } from '../con/con.component';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss']
})
export class ChaComponent implements OnInit {
  public chaMessage ='';
  @ViewChild('thangteo') thangteo: ConComponent | undefined;
  @ViewChild('thangti') thangti: ConComponent | undefined;


  constructor() { }

  public ngOnInit(): void {
  }

  public conGoi(name: string) {
    this.chaMessage ='chào con'+name;
  }
  public choConTien() {
    this.thangteo?.choTien(19);
    this.thangti?.choTien(20);
  }

}
