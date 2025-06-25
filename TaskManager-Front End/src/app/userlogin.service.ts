import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private http:HttpClient) { 
    
  }
  post(body:any){
    return this.http.post('http://localhost:3000/user',body);
  }

  register(body:any){
    return this.http.post('http://localhost:3000/user/register',body); 
  }


}
