import { Component, OnInit } from '@angular/core';
import { Participant } from '../../../models/participant.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RendezVous } from '../../../models/rendez-vous';

@Component({
  selector: 'app-rendez-vous-edit',
  templateUrl: './rendez-vous-edit.component.html',
  styleUrls: ['./rendez-vous-edit.component.css']
})
export class RendezVousEditComponent implements OnInit {
  parent: any;
  participants:Participant[]=[];
  rendezVous:RendezVous;
  selectedParticipantId1:string;
  selectedParticipantId2:string;
  numeroTable:string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  updated(){
    this.rendezVous.participant1 = this.participants.find(p=>p.id==this.selectedParticipantId1);
    this.rendezVous.participant2 = this.participants.find(p=>p.id==this.selectedParticipantId2);
    this.rendezVous.numeroTable = this.numeroTable;
    this.rendezVous.annuler = false;
    this.activeModal.close();
  }
  annuler(){
    this.rendezVous.annuler=true;
    this.activeModal.close();
  }
  
  supprimer(){
    this.parent.supprimer(this.rendezVous);
    this.activeModal.close();
  }

}
