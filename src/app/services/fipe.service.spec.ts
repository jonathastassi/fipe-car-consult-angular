import { TestBed } from '@angular/core/testing';

import { FipeService } from './fipe.service';

describe('FipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FipeService = TestBed.get(FipeService);
    expect(service).toBeTruthy();
  });
});
