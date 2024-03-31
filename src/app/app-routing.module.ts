import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path:'forgett',component:ForgetPasswordComponent},
  {path:'log',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
