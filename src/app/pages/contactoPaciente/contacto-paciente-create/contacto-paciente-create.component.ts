import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { ContactoPacienteReadDTO } from '../../../interfaces/contactoPaciente.model';
import { PacienteReadDTO } from '../../../interfaces/paciente.model';
import { PacienteService } from '../../../services/paciente.service';
import { ContactoPacienteService } from '../../../services/contacto-paciente.service';

@Component({
  selector: 'app-contacto-paciente-create',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './contacto-paciente-create.component.html',
  styleUrl: './contacto-paciente-create.component.css'
})
export class ContactoPacienteCreateComponent {
  contactosForm!: FormGroup;
  contactos: ContactoPacienteReadDTO[] = [];
  pacientes: PacienteReadDTO[] = [];

  constructor(
    private readonly contactoPacienteService: ContactoPacienteService,
    private readonly pacienteService: PacienteService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.contactosForm = this.formBuilder.group({
      pacienteId: ['', [Validators.required]],
      tipoContacto: ['', [Validators.required]],

      calle: ['', [Validators.required, Validators.minLength(3)]],
      ciudad: ['', [Validators.required, Validators.minLength(2)]],
      estado: ['', [Validators.required, Validators.minLength(2)]],
      codigoPostal: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });

    this.pacienteService.obtenerPacientes().subscribe({
      next: (data) => {
        this.pacientes = data;
      },
      error: (error) => {
        console.log("Error al obtener pacientes", error);
      }
    });
  }

  enviarFormulario() {
    this.contactosForm.markAllAsTouched();

    if (this.contactosForm.invalid) {
      return;
    }

    const productData = this.contactosForm.value;

    this.contactoPacienteService.agregarContacto(productData).subscribe({
      next: response => {
        this.router.navigate(['/contactoPaciente']);
      },
      error : err => {
        console.log("Error al agregar contacto", err);
      }
    });
  }


}
