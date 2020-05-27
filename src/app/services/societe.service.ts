import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { Societe } from '../models/societe.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SocieteService {
  baseUrl=environment.address+"societe/";
  constructor(private httpClient:HttpClient) {

   }
   
   findAll():Observable<Societe[]>{
     return this.httpClient.get(this.baseUrl) as Observable<Societe[]>;
   }
  
   findById(id:string):Observable<Societe>{
     return this.httpClient.get(this.baseUrl+id) as Observable<Societe>;
   }
   
   add(societe:Societe):Observable<Societe>{
     return this.httpClient.post(this.baseUrl,societe,httpOptions) as Observable<Societe>;
   }
   
   update(societe:Societe):Observable<Societe>{
    return this.httpClient.put(this.baseUrl,{societe:societe}) as Observable<Societe>;
  }
  delete(societe:Societe):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+societe.id) as Observable<boolean>;
  }
  
  deleteById(id:string):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+id) as Observable<boolean>;
  }

}
