import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPacienteUpdateComponent } from './contacto-paciente-update.component';

describe('ContactoPacienteUpdateComponent', () => {
  let component: ContactoPacienteUpdateComponent;
  let fixture: ComponentFixture<ContactoPacienteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoPacienteUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoPacienteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
