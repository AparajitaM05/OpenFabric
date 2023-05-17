import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } 
    from '@angular/common/http';
// import { AddProductComponent } from './add-product/add-product.component';
import { MyFormComponent } from './my-form/my-form.component';
import { RouterModule } from '@angular/router';
import { EditprodComponent } from './editprod/editprod.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule, 
    ReactiveFormsModule,
    BrowserModule, 
    RouterModule
  ],
  declarations: [
    AppComponent,
    // ProductsComponent,
    // // AddProductComponent,
    // MyFormComponent,
    routingComponents,
    EditprodComponent,
    DetailViewComponent,
    
  ],
  exports: [
    FormsModule,
    // ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export class MyFormModule { }
