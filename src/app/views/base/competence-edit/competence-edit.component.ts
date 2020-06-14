import { Component, OnInit, Input } from '@angular/core';
import { Competence } from '../../../models/competence.models';
import { CompetenceService } from '../../../services/competence.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-competence-edit',
  templateUrl: './competence-edit.component.html',
  styleUrls: ['./competence-edit.component.css']
})
export class CompetenceEditComponent implements OnInit {
competence:Competence=new Competence();
parent:any;
  constructor(private competenceService:CompetenceService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  

  addCompetence(){
    this.competenceService.add(this.competence).subscribe(e=>{
      this.parent.ngOnInit()
      this.activeModal.close();
    },err=>{
      console.log(err)
    })

  }


}
