import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginform! : FormGroup;
  signupform! :FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private userService:UserService,private route:Router){}
  ngOnInit(): void {
    console.log("hello");
    this.loginform=this.formBuilder.group(
       {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
      });
      this.signupform=this.formBuilder.group(
        {fullname:[],
          email:[],
          password:[],
          mobilenumber:[]
        }
      );
    }
    LoginSubmit():any{
      this.submitted=true;
      if(this.loginform.valid){
        let Data={
          emailId:this.loginform.value.email,
          password:this.loginform.value.password
        }
        // this.userService.LogIn(Data).subscribe((res:any)=>{
        //   console.log(res.message);
        // });
        this.userService.LogIn(Data).subscribe((res:any)=>{
          console.log(res);
          localStorage.setItem("token",res.data);
          this.route.navigateByUrl("/home");
        })}
      else{console.log("Invalid Input")};

     
    
  }
  signup():any{
    const reqData = {
      fullName:this.signupform.get('fullname')?.value,      
      emailId:this.signupform.get('email')?.value,
      password: this.signupform.get('password')?.value,
      mobileNumber: this.signupform.get('mobilenumber')?.value,
    }
    console.log(reqData);
    this.userService.SignUp(reqData).subscribe(
      (response:any)=>{
        console.log("Registration Successful" + response.data);
      },(error)=>{
        console.
log(reqData);
    this.userService.SignUp(reqData).subscribe(
      (response:any)=>{
        console.log("Registration Successful" + response.data);
      },(error)=>{
        console.log("Registration Failed", error);
      }
    )
    }
)}}
