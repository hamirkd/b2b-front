import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '../../../../models/participant.model';

@Component({
  selector: 'app-participant-entete',
  templateUrl: './participant-entete.component.html',
  styleUrls: ['./participant-entete.component.css']
})
export class ParticipantEnteteComponent implements OnInit {
  @Input("participant") participant: Participant;
  constructor() { }

  ngOnInit(): void {
  }

}
