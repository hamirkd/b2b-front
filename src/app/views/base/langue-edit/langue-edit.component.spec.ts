import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangueEditComponent } from './langue-edit.component';

describe('LangueEditComponent', () => {
  let component: LangueEditComponent;
  let fixture: ComponentFixture<LangueEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangueEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
