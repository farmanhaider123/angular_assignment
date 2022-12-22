import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit{
count=0;
constructor(private pser:ProductServicesService){

}

ngOnInit(){
    if(localStorage.getItem('mycart')!=undefined){
      let cdata:any=localStorage.getItem('mycart');
      let data=JSON.parse(cdata);
      this.count=data.length;
    }
    this.pser.subject.subscribe((res:any)=>{
      let data=res.cartData;
      this.count=data.length;
      console.log(data)
    })
}
}
