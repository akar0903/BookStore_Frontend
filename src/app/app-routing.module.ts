import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { LoginComponent } from './Components/login/login.component';
import { PersonalComponent } from './Components/personal/personal.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'forgett',component:ForgetPasswordComponent},
  {path:'log',component:LoginComponent},
  {path:'personal',component:PersonalComponent},
  {path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
