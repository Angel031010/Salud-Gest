import { TestBed } from '@angular/core/testing';

import { ContactoPacienteService } from './contacto-paciente.service';

describe('ContactoPacienteService', () => {
  let service: ContactoPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
