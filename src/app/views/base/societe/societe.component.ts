import { Component, OnInit } from '@angular/core';
import { SocieteService } from '../../../services/societe.service';
import { Societe } from '../../../models/societe.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocieteEditComponent } from '../societe-edit/societe-edit.component';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {

  societes:Societe[]=[];
  constructor(private societeService:SocieteService
    ,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.societeService.findAll().subscribe(societes=>{
      this.societes=societes;
    })
  }
  
  add() {
    const modalRef = this.modalService.open(SocieteEditComponent);
    modalRef.componentInstance.parent=this;
 }
  
 edit(societe:Societe) {
   const modalRef = this.modalService.open(SocieteEditComponent);
   modalRef.componentInstance.societe=societe;
   modalRef.componentInstance.parent=this;
}

}
