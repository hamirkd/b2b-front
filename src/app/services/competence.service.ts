import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Competence } from '../models/competence.models';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  baseUrl=environment.address+"competence/";
  constructor(private httpClient:HttpClient) {

   }
   
   findAll():Observable<Competence[]>{
     return this.httpClient.get(this.baseUrl,httpOptions) as Observable<Competence[]>;
   }
}
