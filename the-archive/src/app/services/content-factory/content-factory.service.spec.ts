import { TestBed } from '@angular/core/testing';

import { ContentFactoryService } from './content-factory.service';

describe('ContentFactoryService', () => {
  let service: ContentFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
