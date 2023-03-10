import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ViewComponent } from './components/view/view.component';
import { TdrivenComponent } from './components/tdriven/tdriven.component';
import { RegisComponent } from './components/regis/regis.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';    
import {MatSelectModule} from '@angular/material/select';
import { AppNgForLoopDirective } from './app-ng-for-loop.directive';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavComponent,
    AddproductComponent,
    EditproductComponent,
    HomeComponent,
    CartComponent,
    ViewComponent,
    TdrivenComponent,
    RegisComponent,
    FilterPipe,
    SortPipe,
    AppNgForLoopDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
