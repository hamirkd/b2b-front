import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteInternetComponent } from './site-internet.component';

describe('SiteInternetComponent', () => {
  let component: SiteInternetComponent;
  let fixture: ComponentFixture<SiteInternetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteInternetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
