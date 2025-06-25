import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http : HttpClient) { }

  post(body:any){
    return this.http.post('http://localhost:3000/task',body);
  }

  put(body:any){
    return this.http.put(`http://localhost:3000/task`,body);
  }

  get(){
    return this.http.get('http://localhost:3000/task');
  }
  
}
