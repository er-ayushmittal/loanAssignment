import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanEligibleComponent } from './loan-eligible/loan-eligible.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes:Routes=[
  {path:"Eligibilty",component:LoanEligibleComponent},
  {path:"",component:LoanDetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoanDetailsComponent,
    LoanEligibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
