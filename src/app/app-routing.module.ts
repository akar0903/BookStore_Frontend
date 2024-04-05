import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { LoginComponent } from './Components/login/login.component';
import { PersonalComponent } from './Components/personal/personal.component';
import { HomeComponent } from './Components/home/home.component';
import { MyorderComponent } from './Components/myorder/myorder.component';
import { OrderComponent } from './Components/order/order.component';
import { MywishlistComponent } from './Components/mywishlist/mywishlist.component';
import { PleaselogComponent } from './Components/pleaselog/pleaselog.component';
import { MycartComponent } from './Components/mycart/mycart.component';
import { ViewbookComponent } from './Components/viewbook/viewbook.component';
const routes: Routes = [
  {path:'forgett',component:ForgetPasswordComponent},
  {path:'log',component:LoginComponent},
  {path:'personal',component:PersonalComponent},
  {path:'home',component:HomeComponent,
children:[
  {path:'log',component:LoginComponent},
]},
  {path:'order',component:MyorderComponent},
  {path:'orderr',component:OrderComponent},
  {path:'wish',component:MywishlistComponent},
  {path:'pleaselog',component:PleaselogComponent},
  {path:'mycart',component:MycartComponent},
  {path:'viewbook',component:ViewbookComponent}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
