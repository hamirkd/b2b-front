import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonChoixComponent } from './mon-choix.component';

describe('MonChoixComponent', () => {
  let component: MonChoixComponent;
  let fixture: ComponentFixture<MonChoixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonChoixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
