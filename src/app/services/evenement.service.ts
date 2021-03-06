import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { Evenement } from '../models/evenement.model';
import { Participant } from '../models/participant.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  baseUrl=environment.address+"evenement/";
  constructor(private httpClient:HttpClient) {

   }
   
   findAll():Observable<Evenement[]>{
     return this.httpClient.get(this.baseUrl) as Observable<Evenement[]>;
   }
  
   findById(id:string):Observable<Evenement>{
     return this.httpClient.get(this.baseUrl+id) as Observable<Evenement>;
   }
   
   add(evenement:Evenement):Observable<Evenement>{
     return this.httpClient.post(this.baseUrl,evenement,httpOptions) as Observable<Evenement>;
   }
   
   update(evenement:Evenement):Observable<Evenement>{
     console.log(evenement)
    return this.httpClient.put(this.baseUrl,evenement) as Observable<Evenement>;
  }
   
  addOrDelete(evenementDto):Observable<Evenement>{
    console.log(evenementDto)
   return this.httpClient.post(this.baseUrl+"addp",evenementDto) as Observable<Evenement>;
 }
  delete(evenement:Evenement):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+evenement.id) as Observable<boolean>;
  }
  
  deleteById(id:string):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+id) as Observable<boolean>;
  }
  
  findByParticipant(participantId:string):Observable<Evenement[]>{
    return this.httpClient.get(this.baseUrl+"findByParticipant/"+participantId) as Observable<Evenement[]>;
  }
}
