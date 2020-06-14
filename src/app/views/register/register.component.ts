import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../../models/participant.model';
import { PaysService } from '../../services/pays.service';
import { CompetenceService } from '../../services/competence.service';
import { Societe } from '../../models/societe.model';
import { SocieteService } from '../../services/societe.service';
import { LangueService } from '../../services/langue.service';
import { Pays } from '../../models/pays.model';
import { Competence } from '../../models/competence.models';
import { Langue } from '../../models/langue.model';
import { ParticipantService } from '../../services/participant.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  participant: Participant = new Participant();
  pays: Pays[] = [];
  competences: Competence[] = [];
  societes: Societe[] = [];
  langues: Langue[] = []
  constructor(private route: Router, private paysService: PaysService, private participantService: ParticipantService,
    private competenceService: CompetenceService, private toastr: ToastrService,
    private societeService: SocieteService, private langueService: LangueService) { }
  ngOnInit() {
    this.langueService.findAll().subscribe(langues => this.langues = langues)
    this.societeService.findAll().subscribe(societes => this.societes = societes)
    this.paysService.findAll().subscribe(payss => this.pays = payss)
    this.competenceService.findAll().subscribe(competences => this.competences = competences)
  }
  creerSonCompte() {

    if (this.participant.competences.length < 2) {
      this.toastr.error("Veuillez choisir 2 compétences");
      return
    }

    this.participant.password = "123456";
    this.participant.pays = this.pays["" + this.participant.pays];
    this.participant.societe = this.societes["" + this.participant.societe]

    this.participant.profil = "PARTICIPANT";
    this.participant.login = this.participant.email;
    this.participantService.add(this.participant).subscribe(data => {
      this.toastr.success("Votre compte est en cours de création, veuillez consulter vos mails");
      this.route.navigateByUrl("login");
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

  addLangue(langue: Langue) {
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
