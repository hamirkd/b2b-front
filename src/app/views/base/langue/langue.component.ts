import { Component, OnInit } from '@angular/core';
import { LangueService } from '../../../services/langue.service';
import { Langue } from '../../../models/langue.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LangueEditComponent } from '../langue-edit/langue-edit.component';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.css']
})
export class LangueComponent implements OnInit {

  langues:Langue[]=[];
  constructor(private langueService:LangueService
    ,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.langueService.findAll().subscribe(langues=>{
      this.langues=langues;
    })
  }
  
  add() {
    const modalRef = this.modalService.open(LangueEditComponent);
    modalRef.componentInstance.parent=this;
 }
  
 edit(langue:Langue) {
   const modalRef = this.modalService.open(LangueEditComponent);
   modalRef.componentInstance.langue=langue;
   modalRef.componentInstance.parent=this;
}

}
