import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { LoginComponent } from './Components/login/login.component';
import { PersonalComponent } from './Components/personal/personal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './Components/home/home.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MyorderComponent } from './Components/myorder/myorder.component';
import { OrderComponent } from './Components/order/order.component';
import { MywishlistComponent } from './Components/mywishlist/mywishlist.component';
import { PleaselogComponent } from './Components/pleaselog/pleaselog.component';
import { MycartComponent } from './Components/mycart/mycart.component';
import { ViewbookComponent } from './Components/viewbook/viewbook.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgetPasswordComponent,
    LoginComponent,
    PersonalComponent,
    HomeComponent,
    MyorderComponent,
    OrderComponent,
    MywishlistComponent,
    PleaselogComponent,
    MycartComponent,
    ViewbookComponent,
    ResetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
