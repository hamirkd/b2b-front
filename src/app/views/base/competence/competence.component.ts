import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../../../services/competence.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompetenceEditComponent } from '../competence-edit/competence-edit.component';
import { Competence } from '../../../models/competence.models';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  competences:Competence[]=[];
  constructor(private competenceService:CompetenceService
    ,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.competenceService.findAll().subscribe(competences=>{
      this.competences=competences;
    })
  }
  
  add() {
    const modalRef = this.modalService.open(CompetenceEditComponent);
    modalRef.componentInstance.parent=this;
 }
  
 edit(competence:Competence) {
   const modalRef = this.modalService.open(CompetenceEditComponent);
   modalRef.componentInstance.competence=competence;
   modalRef.componentInstance.parent=this;
}

}
