import { TestBed } from '@angular/core/testing';

import { UpdateSWService } from './update-sw.service';

describe('UpdateSWService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateSWService = TestBed.get(UpdateSWService);
    expect(service).toBeTruthy();
  });
});
