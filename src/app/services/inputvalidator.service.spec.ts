import { TestBed } from '@angular/core/testing';

import { InputvalidatorService } from './inputvalidator.service';

describe('InputvalidatorService', () => {
  let service: InputvalidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputvalidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
