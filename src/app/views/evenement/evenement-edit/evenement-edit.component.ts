import { Component, OnInit } from '@angular/core';
import { Evenement } from '../../../models/evenement.model';
import { TranslateService } from '@ngx-translate/core';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';
import { EvenementService } from '../../../services/evenement.service';
import { CompetenceService } from '../../../services/competence.service';
import { Competence } from '../../../models/competence.models';

@Component({
  selector: 'app-evenement-edit',
  templateUrl: './evenement-edit.component.html',
  styleUrls: ['./evenement-edit.component.css']
})
export class EvenementEditComponent implements OnInit {

  constructor(private translate: TranslateService, private session: SessionService, private route: Router,
    private evenementService: EvenementService, private competenceService: CompetenceService) {
    if (this.session.isLogin()) {
      if (!this.session.isAdmin()) {
        this.route.navigateByUrl("evenement");
      }
    }
  }
  competences: Competence[] = [];
  ngOnInit(): void {
    this.competenceService.findAll().subscribe(data=>{
      this.competences=data;
      console.log(this.competences)
    },err=>console.log(err));
  }
  evenement: Evenement = new Evenement();
  add() {
    this.evenement.dateDebut=new Date(this.evenement.dateDebut);
    this.evenement.dateFin=new Date(this.evenement.dateFin);
    this.evenementService.add(this.evenement).subscribe(() => {
      this.route.navigateByUrl("/evenement");
    })
  }

}
