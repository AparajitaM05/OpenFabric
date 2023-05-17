import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { ProductsComponent } from './products/products.component';
import { EditprodComponent } from './editprod/editprod.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

// import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'addproduct', component: MyFormComponent },
  { path: 'editproduct/:id', component: EditprodComponent },
  { path: 'index', component: ProductsComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: 'productdetail/:id', component: DetailViewComponent }
  
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents = [ MyFormComponent, ProductsComponent, DetailViewComponent]
