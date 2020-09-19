import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  loan:number = 100000;
  interest:number= 8.5;
  months:number= 150;
  emi:any;
  totalpay:any;

  constructor() { }

  ngOnInit(): void {

    this.calc(this.loan, this.interest, this.months);
  }

  calculate(l, i, m){

    return (l*i*m)/(m-1);

  }

  calc(loan,interest, months){


    

    console.log(this.loan,this.interest, this.months)


    var modulus= Math.pow((1+interest),months);

    this.emi = this.calculate(loan,interest,modulus);

    this.totalpay = this.emi*months;


    console.log(Math.floor(this.emi))
    console.log(Math.floor(this.totalpay))



  }


 




}
