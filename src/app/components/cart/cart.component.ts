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
  id:any;
  myData:any;
   proData:any;
  count=0;
 ngOnInit(): void {
    this.route.params.subscribe(par=>{
      this.id=par['id'];
      this.pser.getProductById(this.id)
      .subscribe(res=>{
         if(res){
           this.myData={id:this.id,category:res.category,pname:res.pname,price:res.price,quantity:res.quantity,description:res.description,image:res.image}
           if(localStorage.getItem('mycart')!=undefined){
          let cdata :any=localStorage.getItem('mycart');
         let arr=JSON.parse(cdata);
         for (const i in arr)
         {
         if(arr[i].id==this.id){
           alert("Product Already in a cart")
         }
         else {
          arr.push(this.myData);
          localStorage.setItem('mycart',JSON.stringify(arr));
           alert("Product added in a cart")
           this.count++;
           this.proData= arr
         }
        }
         
     }
     else {
      let arr=[];
      arr.push(this.myData);
      localStorage.setItem('mycart',JSON.stringify(arr));
      alert("Product added in a cart")
         this.proData= arr
     }
  }
})
})
}
}
