import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl=environment.address+"utilisateur/";
  constructor(private httpClient:HttpClient) {   }
  
   findByLoginAndPassword(login:string,password:string):Observable<any>{
     return this.httpClient.post(this.baseUrl,{login:login,password:password});
   }

}
