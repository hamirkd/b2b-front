import { Component, OnInit, Input } from '@angular/core';
import { Societe } from '../../../models/societe.model';
import { SocieteService } from '../../../services/societe.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-societe-edit',
  templateUrl: './societe-edit.component.html',
  styleUrls: ['./societe-edit.component.css']
})
export class SocieteEditComponent implements OnInit {
societe:Societe=new Societe();
parent:any;
  constructor(private societeService:SocieteService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  

  addSociete(){
    this.societeService.add(this.societe).subscribe(e=>{
      this.parent.ngOnInit()
      this.activeModal.close();
    },err=>{
      console.log(err)
    })

  }


}
