import { Component, OnInit } from '@angular/core';
import { Evenement } from '../../../models/evenement.model';
import { TranslateService } from '@ngx-translate/core';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';
import { EvenementService } from '../../../services/evenement.service';
import { CompetenceService } from '../../../services/competence.service';
import { Competence } from '../../../models/competence.models';
import { ToastrService } from 'ngx-toastr';
import { Langue } from '../../../models/langue.model';
import { LangueService } from '../../../services/langue.service';

@Component({
  selector: 'app-evenement-edit',
  templateUrl: './evenement-edit.component.html',
  styleUrls: ['./evenement-edit.component.css']
})
export class EvenementEditComponent implements OnInit {

  constructor(private translate: TranslateService,private langueService:LangueService, private session: SessionService, private route: Router,
    private evenementService: EvenementService, private competenceService: CompetenceService,
    private toastr:ToastrService) {
    if (this.session.isLogin()) {
      if (!this.session.isAdmin()) {
        this.route.navigateByUrl("evenement");
      }
    }
  }
  competences: Competence[] = [];
  langues:Langue[]=[];
  ngOnInit(): void {
    this.competenceService.findAll().subscribe(data=>{
      this.competences=data;
      console.log(this.competences)
    },err=>console.log(err));
    this.langueService.findAll().subscribe(langues=>this.langues=langues);
  }
  
  evenement: Evenement = new Evenement();
  add() {
    this.evenement.dateDebut=new Date(this.evenement.dateDebut);
    this.evenement.dateFin=new Date(this.evenement.dateFin);
    this.evenementService.add(this.evenement).subscribe(() => {
      this.toastr.success("L'évènement a été ajouté avec succès");
      this.route.navigateByUrl("evenement");
    },err=>{
      console.log(err);
      this.toastr.error("Impossible d'ajouter l'évènement");
    })
  }


  addCompetence(competence: Competence) {
    if (!this.evenement.competences) {
      this.evenement.competences = [];
    }
    const index = this.evenement.competences.findIndex(c => c.id == competence.id);
    if (index < 0) {
      this.evenement.competences.push(competence);
    }
    else {
      this.evenement.competences.splice(index, 1);
    }
  }


  addLangue(langue: Competence) {
    if (!this.evenement.langues) {
      this.evenement.langues = [];
    }
    const index = this.evenement.langues.findIndex(c => c.id == langue.id);
    if (index < 0) {
      this.evenement.langues.push(langue);
    }
    else {
      this.evenement.langues.splice(index, 1);
    }
  }
}
