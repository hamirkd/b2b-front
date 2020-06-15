import { Component, OnInit, Input } from '@angular/core';
import { Societe } from '../../../models/societe.model';
import { SocieteService } from '../../../services/societe.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-societe-edit',
  templateUrl: './societe-edit.component.html',
  styleUrls: ['./societe-edit.component.css']
})
export class SocieteEditComponent implements OnInit {
societe:Societe=new Societe();
parent:any;
  constructor(private societeService:SocieteService,
    private toastr:ToastrService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  

  addSociete(){
    this.societeService.add(this.societe).subscribe(e=>{
      this.toastr.success("Enregistrer avec succès");
      this.parent.ngOnInit()
      this.activeModal.close();
    },err=>{
      console.log(err)
    })

  }


}
