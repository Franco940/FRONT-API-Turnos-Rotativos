import { TestBed } from '@angular/core/testing';

import { JornadaLaboralService } from './jornada-laboral.service';

describe('JornadaLaboralService', () => {
  let service: JornadaLaboralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JornadaLaboralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
