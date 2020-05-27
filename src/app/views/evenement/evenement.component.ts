import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { Evenement } from '../../models/evenement.model';
import { EvenementService } from '../../services/evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent  implements OnInit {
  evenements:Evenement[]=[];
  constructor(public session: SessionService, private route: Router,
    private evenementService:EvenementService) {
    if (this.session.isLogin()) {
      if(!this.session.isAdmin()){
        this.route.navigateByUrl("evenement");
      }
    }
  }
  ngOnInit(){
    this.evenementService.findAll().subscribe(data=>{
      this.evenements=data;
    },err=>console.log(err));
  }
  
  add(){
    this.route.navigate(["evenement/add"]);
  }
  participer(evenement:Evenement){
    evenement['participer']=!evenement['participer'];
  }
  consulterRdv(evenement){
    
  }
  deleteById(id){
    this.evenementService.deleteById(id).subscribe(()=>{this.ngOnInit()},err=>console.log(err))
  }

}
