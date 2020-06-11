import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantEnteteComponent } from './participant-entete.component';

describe('ParticipantEnteteComponent', () => {
  let component: ParticipantEnteteComponent;
  let fixture: ComponentFixture<ParticipantEnteteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantEnteteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantEnteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
