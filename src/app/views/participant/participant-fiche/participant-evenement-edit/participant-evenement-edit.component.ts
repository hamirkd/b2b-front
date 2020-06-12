import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Participant } from '../../../../models/participant.model';
import { EvenementService } from '../../../../services/evenement.service';
import { Evenement } from '../../../../models/evenement.model';
import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-participant-evenement-edit',
  templateUrl: './participant-evenement-edit.component.html',
  styleUrls: ['./participant-evenement-edit.component.css']
})
export class ParticipantEvenementEditComponent implements OnInit {

  @Input() participant:Participant;
  evenements:Evenement[]=[];
  evenementId:string;
  parent:any;

  constructor(
    public activeModal: NgbActiveModal,
    private evenementService:EvenementService
    ) {}
  ngOnInit(): void {
    this.evenementService.findAll().subscribe(datas=>{
      this.evenements = datas.filter(e=>{
        for(const p of e.participants){
          console.log(p.id,this.participant.id)
          if(p.id==this.participant.id)return false;
        }
        return true;
      })
    },err=>console.log(err));
  }

  ajouterParticipant(){
    const evenementDto={id:this.evenementId,login:this.participant.login};
    this.evenementService.addOrDelete(evenementDto).subscribe(e=>{
      this.parent.ngOnInit()
      this.activeModal.close();
    },err=>{
      console.log(err)
    })

  }

}
