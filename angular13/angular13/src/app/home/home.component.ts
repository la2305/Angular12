import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Huy bú cu';
  public age = 15;
  public traiCay = ['trái bưởi','trái dứng','trái bắp','dưa leo'];
  public gai = [
    {'soThutu':1,'ten':'uyen nhi','nhanSac':'xinh','du':true},
    {'soThutu':2,'ten':'ngoc nhi','nhanSac':'tuyet voi','du':false},
    {'soThutu':3,'ten':'thao nhi','nhanSac':'beatiful','du':true}
  ]

  public district: String [] = ['Quận/Huyện'];
  public vietNamData = [
    {
      city: 'Chọn thành phố',
      district: ['Quận/Huyện']
    },
    {
      city: 'An Giang',
      district: ["Thành phố Long Xuyên","Thành phố Châu Đốc","Thị xã Tân Châu","Huyện An Phú","Huyện Châu Phú","Huyện Châu Thành","Huyện Chợ Mới","Huyện Phú Tân","Huyện Thoại Sơn","Huyện Tịnh Biên","Huyện Tri Tôn"]
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: ["Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"]
    },
    {
      city: 'Bạc Liêu',
      district: ["Thành phố Bạc Liêu","Huyện Đông Hải","Huyện Giá Rai","Huyện Hòa Bình","Huyện Hồng Dân","Huyện Phước Long","Huyện Vĩnh Lợi"]
    }
  ]

  constructor() { }

  public ngOnInit(): void {
    // console.log(this.traiCay);
  }


  













  public changeCity(event: any):void {
      const city = event.target.value;
      if(!city) {
        return;
      }

      // C1
      // const search = this.vietNamData.filter((data) => data.city === city)
      // console.log(search[0].district);
      // if(search && search.length >0 ) {
      //   this.district = search[0].district;
      // }

      // C2
      this.district = this.vietNamData.find(data => data.city === city)?.district || [];
  }

  
  // public resetName(): void {
  //   console.log("reset Name");
  //   this.age = 18;
  // } 

}
