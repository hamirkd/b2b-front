import { Component, OnInit } from '@angular/core';
import { RendezVous } from '../../models/rendez-vous';
import { SessionService } from '../../services/session.service';
import { RendezVousService } from '../../services/rendez-vous.service';

@Component({
  selector: 'app-mes-rendez-vous',
  templateUrl: './mes-rendez-vous.component.html',
  styleUrls: ['./mes-rendez-vous.component.css']
})
export class MesRendezVousComponent implements OnInit {
  rendezVousList:RendezVous[]=[]
  constructor(private sessionService:SessionService,private rendezVousService:RendezVousService) { }

  ngOnInit(): void {
    this.rendezVousService.findByParticipant(this.sessionService.user.login).subscribe(r=>{
      this.rendezVousList=r;
      console.log(r)
      console.log(this.sessionService.user.login)
    },err=>console.log(err))
  }
  isEmpty(){
    return this.rendezVousList.length<=0;
  }
  annuler(rendezVous:RendezVous){
    rendezVous.annuler=true;
    this.rendezVousService.update(rendezVous).subscribe(a=>{
      this.ngOnInit();
    },err=>{
      console.log(err)
    })
  }

}
