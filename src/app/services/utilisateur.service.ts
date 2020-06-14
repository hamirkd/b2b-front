import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  baseUrl=environment.address+"utilisateur/";
  constructor(private httpClient:HttpClient) {

   }
   
   findAll():Observable<Utilisateur[]>{
     return this.httpClient.get(this.baseUrl) as Observable<Utilisateur[]>;
   }
  
   findById(id:string):Observable<Utilisateur>{
     return this.httpClient.get(this.baseUrl+id) as Observable<Utilisateur>;
   }
   
   add(utilisateur:Utilisateur):Observable<Utilisateur>{
     return this.httpClient.post(this.baseUrl,utilisateur,httpOptions) as Observable<Utilisateur>;
   }
   
   update(utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.httpClient.put(this.baseUrl,{utilisateur:utilisateur}) as Observable<Utilisateur>;
  }
  delete(utilisateur:Utilisateur):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+utilisateur.id) as Observable<boolean>;
  }
  
  deleteById(id:string):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+id) as Observable<boolean>;
  }

}
