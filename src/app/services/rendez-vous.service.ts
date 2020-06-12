import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { RendezVous } from '../models/rendez-vous';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  baseUrl=environment.address+"rendez-vous/";
  constructor(private httpClient:HttpClient) {

   }
   
   findAll():Observable<RendezVous[]>{
     return this.httpClient.get(this.baseUrl) as Observable<RendezVous[]>;
   }
  
   findById(id:string):Observable<RendezVous>{
     return this.httpClient.get(this.baseUrl+id) as Observable<RendezVous>;
   }
   
   add(rendezVous:RendezVous):Observable<RendezVous>{
     return this.httpClient.post(this.baseUrl,rendezVous,httpOptions) as Observable<RendezVous>;
   }
   
   update(rendezVous:RendezVous):Observable<RendezVous>{
     console.log(rendezVous)
    return this.httpClient.put(this.baseUrl,rendezVous) as Observable<RendezVous>;
  }
  
  sauvegarderRendezVousGenerer(rendezVousList:RendezVous[]):Observable<RendezVous[]>{
    return this.httpClient.post(this.baseUrl+"genererList",rendezVousList,httpOptions) as Observable<RendezVous[]>;
  }

  delete(rendezVous:RendezVous):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+rendezVous.id) as Observable<boolean>;
  }
  
  deleteById(id:string):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+id) as Observable<boolean>;
  }
  
  findByParticipant(login:string):Observable<RendezVous[]>{
    return this.httpClient.get(this.baseUrl+"findByParticipant/"+login) as Observable<RendezVous[]>;
  }
  
  findByEvenement(evenementId:string):Observable<RendezVous[]>{
    return this.httpClient.get(this.baseUrl+"findByEvenement/"+evenementId) as Observable<RendezVous[]>;
  }
}
