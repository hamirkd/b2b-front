import { TestBed } from '@angular/core/testing';

import { TranslateCustumService } from './translate-custum.service';

describe('TranslateCustumService', () => {
  let service: TranslateCustumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateCustumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
