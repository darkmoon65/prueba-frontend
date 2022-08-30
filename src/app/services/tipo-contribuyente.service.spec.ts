import { TestBed } from '@angular/core/testing';

import { TipoContribuyenteService } from './tipo-contribuyente.service';

describe('TipoContribuyenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoContribuyenteService = TestBed.get(TipoContribuyenteService);
    expect(service).toBeTruthy();
  });
});
