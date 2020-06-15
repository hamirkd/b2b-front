import { Component, OnInit, Input } from '@angular/core';
import { Competence } from '../../../models/competence.models';
import { CompetenceService } from '../../../services/competence.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-competence-edit',
  templateUrl: './competence-edit.component.html',
  styleUrls: ['./competence-edit.component.css']
})
export class CompetenceEditComponent implements OnInit {
competence:Competence=new Competence();
parent:any;
  constructor(private competenceService:CompetenceService,
    private toastr:ToastrService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  

  addCompetence(){
    this.competenceService.add(this.competence).subscribe(e=>{
      this.parent.ngOnInit()
      this.toastr.success("Enregistrer avec succès");
      this.activeModal.close();
    },err=>{
      console.log(err)
      this.toastr.error("Impossible d'enregistrer");
    })

  }


}
