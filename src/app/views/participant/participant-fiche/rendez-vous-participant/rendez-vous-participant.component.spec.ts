import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousParticipantComponent } from './rendez-vous-participant.component';

describe('RendezVousParticipantComponent', () => {
  let component: RendezVousParticipantComponent;
  let fixture: ComponentFixture<RendezVousParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezVousParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
