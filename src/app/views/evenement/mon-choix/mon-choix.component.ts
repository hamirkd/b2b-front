import { Component, OnInit } from '@angular/core';
import { Participant } from '../../../models/participant.model';
import { ActivatedRoute } from '@angular/router';
import { ParticipantService } from '../../../services/participant.service';
import { EvenementService } from '../../../services/evenement.service';

@Component({
  selector: 'app-mon-choix',
  templateUrl: './mon-choix.component.html',
  styleUrls: ['./mon-choix.component.css']
})
export class MonChoixComponent implements OnInit {

  participants: Participant[]=[];
  evenementId:string;
  selectedParticipantId2:string;
  selectedParticipantId1:string;
  selectedParticipantId3:string;
  constructor(private route: ActivatedRoute, private evenementService: EvenementService) {
    if (this.route.snapshot.paramMap.get("id")) {
      this.evenementId = this.route.snapshot.paramMap.get("id");
    }
  }

  ngOnInit(): void {
    this.evenementService.findById(this.evenementId).subscribe(p => {
      this.participants = p.participants;
      console.log(p)
    },err=>console.log(err))
  }
  updated(){

  }
}
