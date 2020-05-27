import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
user:User;
  constructor() { }
  isLogin():boolean{
    if(this.user)return true;
    if(localStorage.getItem("userData")){
      this.user=JSON.parse(localStorage.getItem("userData"));
      if(this.user)return true;
    }
    return false;
  }
  isAdmin():boolean{
    return this.user.participant==null;
  }
}
