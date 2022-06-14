import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  constructor(private router:Router) {}
    onBack():void{
      this.router.navigate(['/Eligibilty']);
   }

  ngOnInit(): void {
  }
  mob="";
  name="";
  email="";
  address="";
  state="";
  
  
}
