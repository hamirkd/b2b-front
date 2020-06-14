import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '../../../../models/participant.model';
import { ParticipantService } from '../../../../services/participant.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participant-entete',
  templateUrl: './participant-entete.component.html',
  styleUrls: ['./participant-entete.component.css']
})
export class ParticipantEnteteComponent implements OnInit {
  @Input("participant") participant: Participant;
  constructor(private participantService:ParticipantService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }
  delete(){
    this.participantService.deleteById(this.participant.id).subscribe(data=>{
      this.toastr.success("Supprimer avec succès");
      this.router.navigateByUrl("participant");
    },
    err=>{
      console.log(err)
      this.toastr.error("Impossible de supprimer les informations du participant");
    })
  }
}
