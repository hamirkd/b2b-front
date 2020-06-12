import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '../../../../models/participant.model';
import { EvenementService } from '../../../../services/evenement.service';
import { Evenement } from '../../../../models/evenement.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParticipantEvenementEditComponent } from '../participant-evenement-edit/participant-evenement-edit.component';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ParticipantEvenementEditComponent } from '../participant-evenement-edit/participant-evenement-edit.component';
@Component({
  selector: 'app-participant-evenement',
  templateUrl: './participant-evenement.component.html',
  styleUrls: ['./participant-evenement.component.css']
})
export class ParticipantEvenementComponent implements OnInit {
  @Input("participant") participant: Participant;
  evenements:Evenement[]=[];
  constructor(private evenementService:EvenementService
    ,private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.evenementService.findByParticipant(this.participant.id).subscribe(e=>{
      this.evenements=e;
    })
  }

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  add() {
     const modalRef = this.modalService.open(ParticipantEvenementEditComponent);
     modalRef.componentInstance.participant=this.participant;
     modalRef.componentInstance.parent=this;
  }
  
  delete(evenementId:string){
    const evenementDto={id:evenementId,login:this.participant.login};
    this.evenementService.addOrDelete(evenementDto).subscribe(e=>{
      this.ngOnInit()
    },err=>{
      console.log(err)
    })
  }
}
