import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantFicheComponent } from './participant-fiche.component';

describe('ParticipantFicheComponent', () => {
  let component: ParticipantFicheComponent;
  let fixture: ComponentFixture<ParticipantFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
