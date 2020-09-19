import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  client:boolean;
  username: string;
  locality:string = "Dharmapuri";
  
  constructor() { }

  ngOnInit(): void {

     this.username = localStorage.getItem('username');


    if(this.username == 'admin1@gmail.com' ){

      this.client = false;


    }
    else if(this.username == 'admin2@gmail.com'){
      this.client = false;
    }
    else {
      this.client = true;
    }

    console.log(this.locality);

  }

  chnLoc(){

    console.log(this.locality);

  }

}
