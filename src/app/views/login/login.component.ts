import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Participant } from '../../models/participant.model';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  username:string="";
  password:string="";
  constructor(private route:Router,private loginService:LoginService,private toastr:ToastrService){
    if(localStorage.getItem("userData")){
      this.route.navigateByUrl("dashboard")
    }
  }

  connecter(){
    console.log(this.username,this.password)
    let user:User=new User();
    user.login=this.username;user.password=this.password;
    this.loginService.findByLoginAndPassword(this.username,this.password).subscribe(data=>{
      localStorage.setItem("userData",JSON.stringify(data));
      this.toastr.success("Bienvenue");
      this.route.navigateByUrl("");
    },err=>{
      console.log(err);
      this.toastr.error("Veuillez verifier vos identifiants");
    })
  }
}
