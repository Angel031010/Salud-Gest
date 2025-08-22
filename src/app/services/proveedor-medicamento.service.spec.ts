import { TestBed } from '@angular/core/testing';

import { ProveedorMedicamentoService } from './proveedor-medicamento.service';

describe('ProveedorMedicamentoService', () => {
  let service: ProveedorMedicamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedorMedicamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
