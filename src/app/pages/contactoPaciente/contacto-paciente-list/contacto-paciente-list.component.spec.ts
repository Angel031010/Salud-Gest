import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPacienteListComponent } from './contacto-paciente-list.component';

describe('ContactoPacienteListComponent', () => {
  let component: ContactoPacienteListComponent;
  let fixture: ComponentFixture<ContactoPacienteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoPacienteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoPacienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
