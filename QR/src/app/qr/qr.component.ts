import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnInit {
  public title = 'QR';
  public qrInfo ='https://www.google.com.vn/';
  public name = '';
  public age = 0;
  public width = 300;
  public cuoibap='';
  
  constructor() { }

  public ngOnInit(): void {
  }

  public changeQr(qr: any): void {
    this.qrInfo = qr.target.value;
    this.combine();
  }
  public changeName(name: any): void {
    this.name = name.target.value;
    this.combine();
  }
  public changeAge(age: any): any {
    this.age = age.target.value;
    this.combine();
  }
  public combine(){
    const data = JSON.stringify({name: this.name, age: this.age});
    console.log('Qr info= '+this.qrInfo+'?data='+data);
    this.cuoibap = 'Qr info= '+this.qrInfo+'?data='+data;
  }
}
