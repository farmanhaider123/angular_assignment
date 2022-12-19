import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductServicesService } from 'src/app/services/product-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{


   selected = ['1'];
 
   myData={category:'',pname:'',price:'',quantity:'',description:'',image:''}
   proData:any;
   filteredString:string='';
  value:string='';
  value1:string=' ';
   upid:string='';

  constructor(private pser:ProductServicesService) {

    console.log(this.value) }




  ngOnInit(): void {
    
    this.pser.getAllProduct()
    .subscribe((res:any)=>{
        console.log(res);
        this.proData=res;
    })
  }
  onChange(){
this.value="price";
console.log(this.value)
  }
  delPro(id:any){
    Swal.fire({
      title:'Are you Want to Remove ?',
      text:'You will not be able to recover this product',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes Delete It',
      cancelButtonText:'No keep it'
    }).then((result)=>{
if(result.value)
this.pser.deleteData(id)
      .subscribe(res=>{
         if(res){
          Swal.fire("Product is  Deleted",'','success');
          let data=this.proData.filter((user:any)=> user._id!=id);
          this.proData=data;
           
         }
      })
    })
      
    }
  }
   

 



