import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }
  postService(url:string,reqdata:any,token: boolean=false,httpOptions:any={}){
    return this.http.post(url,reqdata,token&&httpOptions);
  }
  postServiceReset(url:string,reqdata:any,token: boolean=true,httpOptions:any={}){
    return this.http.post(url,reqdata,token&&httpOptions);
  }
  getService(url:string,token:boolean=true,httpOptions:any={}){
    return this.http.get(url,token&&httpOptions);
  }
  putService(url:string,reqdata:any,token: boolean=true,httpOptions:any={}){
    return this.http.put(url,reqdata,token&&httpOptions);
  }
}
