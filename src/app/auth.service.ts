import { Injectable } from '@angular/core';

import { Router } from  "@angular/router";

import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { }


  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    console.log(result.user.email);
    localStorage.setItem('username', result.user.email);

    this.router.navigate(['home']);
}

async register(email: string, password: string) {
  var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
  
  console.log(result.user.email);

  localStorage.setItem('username', result.user.email);

  if(result){
    this.router.navigate(['home']);
  }
}
}
