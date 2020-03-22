
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';



import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule  } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { AngularFireAuthModule  } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    ProductsComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAQHjVWSmepiilX8emY-mhQiyIlAWESk3U",
        authDomain: "ecommerceapp-78747.firebaseapp.com",
        databaseURL: "https://ecommerceapp-78747.firebaseio.com",
        projectId: "ecommerceapp-78747",
        storageBucket: "ecommerceapp-78747.appspot.com",
        messagingSenderId: "4574222356",
        appId: "1:4574222356:web:803baa4d7e0ec17471ef01",
        measurementId: "G-7QLNMT381N"
      }),
     // AngularFirestore,

     AngularFirestoreModule,
     AngularFireAuthModule 
     

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
