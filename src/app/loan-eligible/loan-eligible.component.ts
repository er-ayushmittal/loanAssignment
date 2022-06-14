import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-eligible',
  templateUrl: './loan-eligible.component.html',
  styleUrls: ['./loan-eligible.component.css']
})
export class LoanEligibleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  amt="";
  cs="";
  loan=0; 
  homeloan="error";
  result=0;
  hl=prompt("Enter 1 for homeloan @ 8% , 2 for buissenessloan @ 10%, 3 for personalloan @ 12%");
  onClick() {
    this.loan=Number(this.amt)*35/100;
    if(this.hl==="1")
    this.result=this.loan+((this.loan*8)/100);
    else if(this.hl==="2")
    this.result=this.loan+((this.loan*10)/100);
    else if(this.hl==="3")
    this.result=this.loan+((this.loan*12)/100);
  }
  
  
  public saveUsername!: boolean;
}