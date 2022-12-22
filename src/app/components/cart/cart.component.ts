import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(private pser:ProductServicesService,private route:ActivatedRoute,private router:Router){

}

  myData:any;
   proData:any=[];   
  count=0;
  element:any
 ngOnInit(): void {
 let cdata:any=localStorage.getItem('mycart');
         let arr=JSON.parse(cdata);
         arr.forEach((res1: any)=> {
           this.pser.getProductById(res1).subscribe(res=>{
         if(res){
           this.myData={id:res._id,category:res.category,pname:res.pname,price:res.price,quantity:res.quantity,description:res.description,image:res.image}
        
          }
         this.proData.push(this.myData);
         console.log(this.proData)
      })
         });
 
    
  
}
 delPro(id:any){
this.proData.forEach((val:any,ind:any)=>
{
if(id==this.proData[ind].id)
{
  this.proData.splice(ind,1);

         localStorage.removeItem('mycart')
            this.pser.setcart(this.proData);
}
   this.pser.setcart(this.proData);
  
})
 }
}
