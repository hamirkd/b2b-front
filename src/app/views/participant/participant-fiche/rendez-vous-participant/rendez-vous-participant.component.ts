import { Component, OnInit, Input } from '@angular/core';
import { RendezVous } from '../../../../models/rendez-vous';
import { SessionService } from '../../../../services/session.service';
import { RendezVousService } from '../../../../services/rendez-vous.service';
import { Participant } from '../../../../models/participant.model';

@Component({
  selector: 'app-rendez-vous-participant',
  templateUrl: './rendez-vous-participant.component.html',
  styleUrls: ['./rendez-vous-participant.component.css']
})
export class RendezVousParticipantComponent implements OnInit {
  @Input("participant")participant:Participant;
  rendezVousList:RendezVous[]=[]
  constructor(private rendezVousService:RendezVousService) { }

  ngOnInit(): void {
    console.log(this.participant)
    this.rendezVousService.findByParticipant(this.participant.login).subscribe(r=>{
      this.rendezVousList=r;
      console.log(r)
    },err=>console.log(err))
  }

}
