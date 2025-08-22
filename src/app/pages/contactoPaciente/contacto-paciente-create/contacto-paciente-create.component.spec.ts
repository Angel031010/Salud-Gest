import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPacienteCreateComponent } from './contacto-paciente-create.component';

describe('ContactoPacienteCreateComponent', () => {
  let component: ContactoPacienteCreateComponent;
  let fixture: ComponentFixture<ContactoPacienteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoPacienteCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoPacienteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
