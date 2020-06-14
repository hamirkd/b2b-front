import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetenceService } from '../../../services/competence.service';
import { Competence } from '../../../models/competence.models';
import { Participant } from '../../../models/participant.model';
import { ParticipantService } from '../../../services/participant.service';
import { SocieteService } from '../../../services/societe.service';
import { Societe } from '../../../models/societe.model';
import { Pays } from '../../../models/pays.model';
import { PaysService } from '../../../services/pays.service';
import { ToastrService } from 'ngx-toastr';
import { Langue } from '../../../models/langue.model';
import { LangueService } from '../../../services/langue.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocieteEditComponent } from '../../base/societe-edit/societe-edit.component';

@Component({
  selector: 'app-participant-edit',
  templateUrl: './participant-edit.component.html',
  styleUrls: ['./participant-edit.component.css']
})
export class ParticipantEditComponent implements OnInit {

  competences: Competence[] = [];
  participant: Participant = new Participant();
  langues:Langue[]=[];
  societes: Societe[] = [];
  pays: Pays[] = [];
  typeProfil = "PARTICIPANT";

  constructor(
    private modalService: NgbModal,private route: Router, private competenceService: CompetenceService,
    private paysService: PaysService, private toastr: ToastrService,private langueService:LangueService,
    private participantService: ParticipantService, private societeService: SocieteService) { }

  ngOnInit(): void {
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
  add() {

    if (this.typeProfil == 'PARTICIPANT') {
      if (this.participant.competences.length < 2) {
        this.toastr.error("Veuillez choisir 2 compétences");
        return
      }

      this.participant.password = "123456";
      this.participant.pays = this.pays["" + this.participant.pays];
      this.participant.societe = this.societes["" + this.participant.societe]
    }
    this.participant.profil = this.typeProfil;
    this.participant.login = this.participant.email;
    this.participantService.add(this.participant).subscribe(data => {
     this.toastr.success("Le participant a été ajouté avec succes");
     this.route.navigateByUrl("participant");
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

  addSociete(){
    const modalRef = this.modalService.open(SocieteEditComponent);
    modalRef.componentInstance.parent=this;
  }

}
