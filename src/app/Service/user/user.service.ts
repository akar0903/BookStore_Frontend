import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpService) { }
  LogIn(Data:any){
    let head={
      headers:new HttpHeaders({
        'content-type':'application-json'
      })
    }
    return this.httpservice.postService('https://localhost:44307/api/User/Log',Data,false,head);
  }
  SignUp(Data:any){
    let head={
      headers:new HttpHeaders({
        'content-type':'application-json'
      })
    }
    return this.httpservice.postService('https://localhost:44307/api/User/Reg',Data,false,head);
  }
  forget(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/',
      }),
    };
    return this.httpservice.postService('https://localhost:44307/api/User/forget?Email=' + reqData.emailId,{},false,header);
  }
  reset(reqData: any, token: any) {
    let header = {
      headers: new HttpHeaders({'Content-type': 'application/json',Authorization: 'Bearer ' + token,}),
    };
    return this.httpservice.postServiceReset('https://localhost:44307/api/User/reset',reqData,true,header
    );
  }
}
