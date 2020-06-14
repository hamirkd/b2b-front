import { Component, OnInit } from '@angular/core';
import { Langue } from '../../models/langue.model';
import { Competence } from '../../models/competence.models';
import { Router } from '@angular/router';
import { CompetenceService } from '../../services/competence.service';
import { PaysService } from '../../services/pays.service';
import { ToastrService } from 'ngx-toastr';
import { ParticipantService } from '../../services/participant.service';
import { SocieteService } from '../../services/societe.service';
import { LangueService } from '../../services/langue.service';
import { Participant } from '../../models/participant.model';
import { Societe } from '../../models/societe.model';
import { Pays } from '../../models/pays.model';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  
  competences: Competence[] = [];
  participant: Participant = new Participant();
  langues:Langue[]=[];
  societes: Societe[] = [];
  pays: Pays[] = [];
  typeProfil = "PARTICIPANT";
  selectedSocieteId:string;
  selectedPaysId:string;
  password1:string;
  constructor(private route: Router, private competenceService: CompetenceService,
    private paysService: PaysService, private toastr: ToastrService,private langueService:LangueService,
    private participantService: ParticipantService, private societeService: SocieteService,
    private sessionService:SessionService) { }

  ngOnInit(): void {
    this.participant=JSON.parse(JSON.stringify(this.sessionService.user));
    if(!this.sessionService.isAdmin()){
      this.participantService.findByLogin(this.participant).subscribe(data=>{
        this.participant=data;
        if(this.participant.societe)
        this.selectedSocieteId = this.participant.societe.id;
        if(this.participant.pays){
          this.selectedPaysId = this.participant.pays.id;
        }
        console.log(this.participant.langues)
      });
    this.competenceService.findAll().subscribe(data => {
      this.competences = data;
    });
    this.societeService.findAll().subscribe(data => {
      this.societes = data;
    });
    this.paysService.findAll().subscribe(pays => {
      this.pays = pays;
    })
    this.langueService.findAll().subscribe(langues=>{
      this.langues=langues
    })
  }
  }
  add() {

    if (this.typeProfil == 'PARTICIPANT') {
      if (this.participant.competences.length < 2) {
        this.toastr.error("Veuillez choisir 2 compétences");
        return
      }

      if(this.selectedPaysId)
      this.participant.pays = this.pays.find(s=>s.id==this.selectedPaysId);
      if(this.selectedSocieteId)
      this.participant.societe = this.societes.find(s=>s.id==this.selectedSocieteId);
    }
    if(this.password1){
      this.participant.password=this.password1;
    }

    this.participantService.update(this.participant).subscribe(data => {
     this.toastr.success("Le participant a été modifié avec succes");
     console.log(data)
    }, err => {
      console.log(err)
      this.toastr.error("Veuillez vous assurer que les informations ont été correctement renseigner");
    })
  }

  addCompetence(competence: Competence) {
    if (!this.participant.competences) {
      this.participant.competences = [];
    }
    const index = this.participant.competences.findIndex(c => c.id == competence.id);
    if (index < 0) {
      this.participant.competences.push(competence);
    }
    else {
      this.participant.competences.splice(index, 1);
    }
    console.log(this.participant.competences.length)
  }

  haveCompetence(competence:Competence){
    if (!this.participant.competences) {
    this.participant.competences = [];
    return false;
  }
    const index = this.participant.competences.findIndex(c => c.id == competence.id);
    return index>=0;
  }
  haveLangue(langue:Langue){
    if (!this.participant.langues) {
    this.participant.langues = [];
    return false;
  }
    const index = this.participant.langues.findIndex(c => c.id == langue.id);
    return index>=0;
  }

  addLangue(langue :Langue) {
    if (!this.participant.langues) {
      this.participant.langues = [];
    }
    const index = this.participant.langues.findIndex(c => c.id == langue.id);
    if (index < 0) {
      this.participant.langues.push(langue);
    }
    else {
      this.participant.langues.splice(index, 1);
    }
    console.log(this.participant.langues.length)
  }

}
