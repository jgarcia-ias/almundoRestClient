/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HotelsService } from './hotels.service';

describe('Service: Hotels', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelsService]
    });
  });

  it('should ...', inject([HotelsService], (service: HotelsService) => {
    expect(service).toBeTruthy();
  }));
});
