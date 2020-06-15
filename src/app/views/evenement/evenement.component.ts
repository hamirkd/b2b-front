import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { ParticipantService } from '../../services/participant.service';
import { Evenement } from '../../models/evenement.model';
import { EvenementService } from '../../services/evenement.service';
import { PaysService } from '../../services/pays.service';
import { Participant } from '../../models/participant.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent  implements OnInit {
  evenements:Evenement[]=[];
  participant:Participant=new Participant();
  constructor(public session: SessionService, private route: Router,
    private evenementService:EvenementService,private e:PaysService,
    private participantService:ParticipantService,private toastr:ToastrService) {
    
  }
  ngOnInit(){
    this.evenementService.findAll().subscribe(data=>{
      this.evenements=data;
    },err=>console.log(err));
    this.participant.login=this.session.user.login;
    this.participantService.findByLogin(this.participant).subscribe(p=>{
      this.participant=p;
    },err=>this.participant=null);
  }
  
  add(){
    this.route.navigate(["evenement/add"]);
  }
  participer(evenement:Evenement){
    const evenementDto={id:evenement.id,login:this.session.user.login}
    this.evenementService.addOrDelete(evenementDto).subscribe(e=>{
      evenement.participants=e.participants;
      this.toastr.success("Vos informations ont été mises à jour");
    },err=>{
      console.log(err)
      this.toastr.error("Echec de mise à jour");
    })
  }
  consulterRdv(evenement){
    this.route.navigate(['/evenement/mon-choix',evenement.id]);
  }
  deleteById(id){
    this.evenementService.deleteById(id).subscribe(()=>{
      this.toastr.success("L'évènement a été supprimé")
      this.ngOnInit()},err=>console.log(err))
  }

  isParticipe(evenement:Evenement){
    if(!evenement.participants)return false;
    const index = evenement.participants.findIndex(a=>a.login==this.session.user.login);
    return index>=0;
  }

}
