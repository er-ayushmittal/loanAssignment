import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEligibleComponent } from './loan-eligible.component';

describe('LoanEligibleComponent', () => {
  let component: LoanEligibleComponent;
  let fixture: ComponentFixture<LoanEligibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanEligibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanEligibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
