import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '../../../../models/participant.model';
import { EvenementService } from '../../../../services/evenement.service';
import { Evenement } from '../../../../models/evenement.model';

@Component({
  selector: 'app-participant-evenement',
  templateUrl: './participant-evenement.component.html',
  styleUrls: ['./participant-evenement.component.css']
})
export class ParticipantEvenementComponent implements OnInit {
  @Input("participant") participant: Participant;
  evenements:Evenement[]=[];
  constructor(private evenementService:EvenementService) { }

  ngOnInit(): void {
    this.evenementService.findAll().subscribe(e=>{
      this.evenements=e;
      console.log(this.evenements)
    })
  }

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
}
