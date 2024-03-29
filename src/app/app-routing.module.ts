import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'about', 
    component: AboutComponent,
    loadChildren:()=>import('./admin/admin.module').then((m)=>m.
    AdminModule)
  },
  {
    path: 'contact',component: ContactComponent,
  },
  {
    path: 'signup',component: RegistrationComponent,
  },
  {
    path: 'signin',component: LoginComponent,
  },
  {
    path: 'cart',component: CartComponent,
  },
  
  {
    path: 'home',component: HomeComponent,
  },
  {
    path: ' ',component: HomeComponent
  },
 
  {
    path: '**', component: NotFoundComponent
  },
  {
    path: 'product/:id',component: ProductComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
