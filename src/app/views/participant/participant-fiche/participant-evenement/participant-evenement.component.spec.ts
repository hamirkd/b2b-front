import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantEvenementComponent } from './participant-evenement.component';

describe('ParticipantEvenementComponent', () => {
  let component: ParticipantEvenementComponent;
  let fixture: ComponentFixture<ParticipantEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
