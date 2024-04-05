import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Service/user/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  forgotForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private userService:UserService){}
  ngOnInit(): void {
    this.forgotForm=this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
    })
  }
  ForgotSubmit(){let reqData={
    emailId:this.forgotForm.value.email,
  }
  console.log(reqData);
  this.userService.forget(reqData).subscribe((res:any)=>{
    console.log(res);
  })

  }}
