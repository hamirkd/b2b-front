import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  username:string="";
  password:string="";
  constructor(private route:Router){
    if(localStorage.getItem("userData")){
      this.route.navigateByUrl("dashboard")
    }
  }

  connecter(){
    console.log(this.username,this.password)
    let user:User=new User();
    user.login=this.username;user.password=this.password;
    if(this.username=="admin"&&this.password=="admin"){
      localStorage.setItem("userData",JSON.stringify(user));
    this.route.navigateByUrl("")
    }

    if(this.username=='participant'&&this.password=='participant'){
      user.participant =new Participant();
      user.participant.id=1;
      localStorage.setItem("userData",JSON.stringify(user));
      this.route.navigateByUrl("")
    }
  }
}
