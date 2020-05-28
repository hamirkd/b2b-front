import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { Pays } from '../models/bpays.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PaysService {
  baseUrl=environment.address+"pays/";
  constructor(private httpClient:HttpClient) {

   }
   
   findAll():Observable<Pays[]>{
     return this.httpClient.get(this.baseUrl) as Observable<Pays[]>;
   }
  
   findById(id:string):Observable<Pays>{
     return this.httpClient.get(this.baseUrl+id) as Observable<Pays>;
   }
   
   add(pays:Pays):Observable<Pays>{
     return this.httpClient.post(this.baseUrl,pays,httpOptions) as Observable<Pays>;
   }
   
   update(pays:Pays):Observable<Pays>{
    return this.httpClient.put(this.baseUrl,{pays:pays}) as Observable<Pays>;
  }
  delete(pays:Pays):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+pays.id) as Observable<boolean>;
  }
  
  deleteById(id:string):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+id) as Observable<boolean>;
  }

}
