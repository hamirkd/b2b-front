import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { Participant } from '../models/participant.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  baseUrl=environment.address+"participant/";
  constructor(private httpClient:HttpClient) {

   }
   
   findAll():Observable<Participant[]>{
     return this.httpClient.get(this.baseUrl) as Observable<Participant[]>;
   }
  
   findById(id:string):Observable<Participant>{
     return this.httpClient.get(this.baseUrl+id) as Observable<Participant>;
   }
   
   add(participant:Participant):Observable<Participant>{
     return this.httpClient.post(this.baseUrl,participant,httpOptions) as Observable<Participant>;
   }
   
   update(participant:Participant):Observable<Participant>{
    return this.httpClient.put(this.baseUrl,{participant:participant}) as Observable<Participant>;
  }
  delete(participant:Participant):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+participant.id) as Observable<boolean>;
  }
  
  deleteById(id:string):Observable<boolean>{
    return this.httpClient.delete(this.baseUrl+id) as Observable<boolean>;
  }

}
