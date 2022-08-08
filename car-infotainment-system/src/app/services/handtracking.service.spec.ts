import { TestBed } from '@angular/core/testing';

import { HandtrackingService } from './handtracking.service';

describe('HandtrackingService', () => {
  let service: HandtrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandtrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
