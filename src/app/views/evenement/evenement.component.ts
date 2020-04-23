import { Component, OnInit } from '@angular/core';
import {EVENEMENT} from './_DATA_EVEMENT'

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent  implements OnInit {
  ngOnInit(){
  }
  evenements:{titre,dateDebut,domaine}[]=EVENEMENT;
  }
