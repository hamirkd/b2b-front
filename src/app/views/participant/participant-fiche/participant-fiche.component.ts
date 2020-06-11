import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from '../../../models/participant.model';
import { ParticipantService } from '../../../services/participant.service';

@Component({
  selector: 'app-participant-fiche',
  templateUrl: './participant-fiche.component.html',
  styleUrls: ['./participant-fiche.component.css']
})
export class ParticipantFicheComponent implements OnInit {

  participant: Participant=new Participant();
  constructor(private route: ActivatedRoute, private participantService: ParticipantService) {
    if (this.route.snapshot.paramMap.get("id")) {
      this.participant.id = this.route.snapshot.paramMap.get("id");
    }
  }

  ngOnInit(): void {
    this.participantService.findById(this.participant.id).subscribe(p => {
      console.log(this.participant.id)
      this.participant = p;
      console.log(p)
    },err=>console.log(err))
  }

}
