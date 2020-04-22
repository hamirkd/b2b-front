import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  username:string="";
  password:string="";
  constructor(private route:Router){
    if(localStorage.getItem("userData")){
      this.route.navigateByUrl("")
    }
  }

  connecter(){
    console.log(this.username,this.password)
    if(this.username=="admin"&&this.password=="admin"){
      localStorage.setItem("userData",JSON.stringify({username:this.username,password:this.password}));
    this.route.navigateByUrl("")
    }
  }
}
