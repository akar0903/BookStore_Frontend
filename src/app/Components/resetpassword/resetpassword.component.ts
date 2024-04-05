import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent {
  resetForm!:FormGroup;
  token:any;
  constructor(private formbuilder: FormBuilder,private userService: UserService,private route: Router) {}
  ngOnInit(): void {
    this.resetForm = this.formbuilder.group({
      newPassword: [
        "",
        [Validators.required,],
      ],
      confirmPassword: [
        "",
        [Validators.required,],
      ]
    });
  }

  ResetSubmit(){
    let reqData = {
      newPassword: this.resetForm.value.newPassword,
      confirmPassword: this.resetForm.value.confirmPassword,
    };
    console.log(reqData);
    this.userService.reset(reqData,this.token).subscribe((res: any) => {
      console.log(res);
    });
  }


}
