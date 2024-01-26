import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angular2-qrcode';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthComponent,
    MyNavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
