import { TestBed } from '@angular/core/testing';

import { RecipesserviceService } from './recipesservice.service';

describe('RecipesserviceService', () => {
  let service: RecipesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
