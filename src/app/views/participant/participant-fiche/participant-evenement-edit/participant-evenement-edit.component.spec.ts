import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantEvenementEditComponent } from './participant-evenement-edit.component';

describe('ParticipantEvenementEditComponent', () => {
  let component: ParticipantEvenementEditComponent;
  let fixture: ComponentFixture<ParticipantEvenementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantEvenementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantEvenementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
