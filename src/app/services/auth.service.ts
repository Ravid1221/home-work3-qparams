import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean
  loggedChange: Subject<any>
  constructor() { 
    this.isLoggedIn = false
    this.loggedChange = new Subject
  }

  isAuth():boolean{
    return this.isLoggedIn
  }

   login():boolean{
    this.isLoggedIn = true
    this.loggedChange.next(this.isLoggedIn)
    return this.isLoggedIn
  }

   logout():boolean{
    this.isLoggedIn = false
    return this.isLoggedIn
  }
}
