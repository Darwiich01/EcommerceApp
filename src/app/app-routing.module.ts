import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlParser } from '@angular/compiler';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { GaurdService } from './services/gaurd.service';

const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'account',  component: AccountComponent, canActivate:[GaurdService]},
    {path: 'cart',     component: CartComponent, canActivate:[GaurdService]},
    {path: 'login',    component: LoginComponent},
    {path: 'logout',   component: LogoutComponent, canActivate:[GaurdService]},
    {path: 'orders',   component: OrdersComponent, canActivate:[GaurdService]},
    {path: 'products', component: ProductsComponent, canActivate:[GaurdService]},
    {path: 'signup',  component: SignUpComponent},
    {path: '**',       component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
