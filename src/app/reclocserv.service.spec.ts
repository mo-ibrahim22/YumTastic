import { TestBed } from '@angular/core/testing';

import { ReclocservService } from './reclocserv.service';

describe('ReclocservService', () => {
  let service: ReclocservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclocservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
