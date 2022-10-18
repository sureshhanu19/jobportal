import { TestBed } from '@angular/core/testing';

import { SureshrecService } from './sureshrec.service';

describe('SureshrecService', () => {
  let service: SureshrecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SureshrecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
