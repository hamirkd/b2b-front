import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetenceService } from '../../../services/competence.service';
import { Competence } from '../../../models/competence.models';
import { Participant } from '../../../models/participant.model';
import { ParticipantService } from '../../../services/participant.service';
import { SocieteService } from '../../../services/societe.service';
import { Societe } from '../../../models/societe.model';

@Component({
  selector: 'app-participant-edit',
  templateUrl: './participant-edit.component.html',
  styleUrls: ['./participant-edit.component.css']
})
export class ParticipantEditComponent implements OnInit {

  competences: Competence[] = [];
  participant: Participant = new Participant();
  societes: Societe[] = [];

  constructor(private route: Router, private competenceService: CompetenceService,
    private participantService: ParticipantService, private societeService: SocieteService) { }

  ngOnInit(): void {
    this.competenceService.findAll().subscribe(data => {
      this.competences = data;
    });
    this.societeService.findAll().subscribe(data => {
      this.societes = data;
    })

  }
  add() {
    this.participantService.add(this.participant).subscribe(data=>{
      this.route.navigateByUrl("participant");
    },err=>console.log(err))
  }

}
