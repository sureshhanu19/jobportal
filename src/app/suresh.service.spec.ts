import { TestBed } from '@angular/core/testing';

import { SureshService } from './suresh.service';

describe('SureshService', () => {
  let service: SureshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SureshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
