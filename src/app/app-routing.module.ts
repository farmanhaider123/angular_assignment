import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CartComponent } from './components/cart/cart.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisComponent } from './components/regis/regis.component';
import { TdrivenComponent } from './components/tdriven/tdriven.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'cart/:id',component:CartComponent},
  {path:'contactform',component:TdrivenComponent},
    {path:'regis',component:RegisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
