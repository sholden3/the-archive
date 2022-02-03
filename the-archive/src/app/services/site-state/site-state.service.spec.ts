import { TestBed } from '@angular/core/testing';

import { SiteStateService } from './site-state.service';

describe('SiteStateService', () => {
  let service: SiteStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
