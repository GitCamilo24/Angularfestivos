import { TestBed } from '@angular/core/testing';

import { FechaFestivoService } from './fecha-festivo.service';

describe('FechaFestivoService', () => {
  let service: FechaFestivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FechaFestivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
