import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { Langue } from '../models/langue.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LangueService {
  baseUrl=environment.address+"langue/";
  constructor(private httpClient:HttpClient) {

   }
   
   findAll():Observable<Langue[]>{
     return this.httpClient.get(this.baseUrl) as Observable<Langue[]>;
   }
  
   findById(id:string):Observable<Langue>{
     return this.httpClient.get(this.baseUrl+id) as Observable<Langue>;
   }
   
   add(langue:Langue):Observable<Langue>{
     return this.httpClient.post(this.baseUrl,langue,httpOptions) as Observable<Langue>;
   }
   
   update(langue:Langue):Observable<Langue>{
    return this.httpClient.put(this.baseUrl,{langue:langue}) as Observable<Langue>;
  }
  delete(langue:Langue):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+langue.id) as Observable<boolean>;
  }
  
  deleteById(id:string):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+id) as Observable<boolean>;
  }

}
