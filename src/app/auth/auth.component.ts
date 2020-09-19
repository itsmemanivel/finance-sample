import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth.service';
import { User } from 'src/app/policy.model';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})


 
export class AuthComponent implements OnInit {

  newUser: boolean= false;
  email: string;
  password: string;
  dob:string;
  city:string;
  user: User = new User();
  constructor( private  authService:  AuthService) { 

  }

  
  ngOnInit(): void {

    
  }


  newUserToggle(){
   this.newUser = true;
   
   

  }

  oldUserToggle(){
    this.newUser = false;
 
    
 
   }


   login(email,password){

    console.log(email);console.log(password);

    this.user.email = email;
    this.user.password = password;
    localStorage.removeItem('username');

    this.authService.login(email, password);

   }

   register(email,password,dob,city){

    // this.user.email = email;
    // this.user.password = password;
    // this.user.dob = dob;
    // this.user.city = city;

    console.log(email,password,dob,city);


    this.user.email = email;
    this.user.password = password;
    this.user.dob = dob;
    this.user.city = city;
    this.user.role = 'admin';
    localStorage.removeItem('username');

    this.authService.register(email, password);

   }
  
  }