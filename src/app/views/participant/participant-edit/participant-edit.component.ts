import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetenceService } from '../../../services/competence.service';
import { Competence } from '../../../models/competence.models';
import { Participant } from '../../../models/participant.model';
import { ParticipantService } from '../../../services/participant.service';
import { SocieteService } from '../../../services/societe.service';
import { Societe } from '../../../models/societe.model';
import { Pays } from '../../../models/Pays.model';
import { PaysService } from '../../../services/pays.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-participant-edit',
  templateUrl: './participant-edit.component.html',
  styleUrls: ['./participant-edit.component.css']
})
export class ParticipantEditComponent implements OnInit {

  competences: Competence[] = [];
  participant: Participant = new Participant();
  societes: Societe[] = [];
  pays:Pays[]=[];
  typeProfil="PARTICIPANT";

  constructor(private route: Router, private competenceService: CompetenceService,
    private paysService:PaysService,private toastr:ToastrService,
    private participantService: ParticipantService, private societeService: SocieteService) { }

  ngOnInit(): void {
    this.competenceService.findAll().subscribe(data => {
      this.competences = data;
    });
    this.societeService.findAll().subscribe(data => {
      this.societes = data;
    });
    this.paysService.findAll().subscribe(d=>{
      this.pays=d;
    })

  }
  add() {
    
    if(this.typeProfil=='PARTICIPANT'){
    if(this.participant.competences){
    let competences:Competence[]=[];
    for(let c of this.participant.competences){
      competences.push({id:c+"",nom:""})
    }
    this.participant.competences=competences;
    console.log(this.participant)
  }else{
    this.toastr.error("Veuillez choisir 3 compétences");
    return 
  }
    
    this.participant.password="123456";
    this.participant.pays = this.pays[""+this.participant.pays];
  }
    this.participant.profil=this.typeProfil;
    this.participant.login=this.participant.email;
    this.participantService.add(this.participant).subscribe(data=>{
      this.toastr.success("Le participant a été ajouté avec succes");
      this.route.navigateByUrl("participant");
    },err=>{
      console.log(err)
      this.toastr.error("Veuillez vous assurer que les informations ont été correctement renseigner");
    })
  }

}
