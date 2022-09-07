import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import {ProductsListComponent } from './products-list/products-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {AboutUsComponent } from './about-us/about-us.component';
import {CartPageComponent} from './cart-page/cart-page.component';
import {PageErrorComponent} from './page-error/page-error.component';


const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'productsList', component: ProductsListComponent },
  { path: 'productsList/:id', component: ProductDetailsComponent },
  { path: 'aboutUs', component:AboutUsComponent},
  { path: 'cart', component:CartPageComponent},
  // { path: '',   redirectTo:'productsList', pathMatch: 'full' },
  { path: '',   redirectTo:'login', pathMatch: 'full' },
  { path: '**', component:PageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
