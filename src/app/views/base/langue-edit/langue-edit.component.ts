import { Component, OnInit, Input } from '@angular/core';
import { Langue } from '../../../models/langue.model';
import { LangueService } from '../../../services/langue.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-langue-edit',
  templateUrl: './langue-edit.component.html',
  styleUrls: ['./langue-edit.component.css']
})
export class LangueEditComponent implements OnInit {
langue:Langue=new Langue();
parent:any;
  constructor(private langueService:LangueService,
    private toastr:ToastrService,

    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  

  addLangue(){
    this.langueService.add(this.langue).subscribe(e=>{
      this.toastr.success("Enregistrer avec succès");
      this.parent.ngOnInit()
      this.activeModal.close();
    },err=>{
      console.log(err)
    })

  }


}
