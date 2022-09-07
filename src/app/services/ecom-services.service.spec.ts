import { TestBed } from '@angular/core/testing';

import { EcomServicesService } from './ecom-services.service';

describe('EcomServicesService', () => {
  let service: EcomServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcomServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
