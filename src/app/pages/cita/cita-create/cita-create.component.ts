import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { CitaReadDTO } from '../../../interfaces/cita.model';
import { PacienteReadDTO } from '../../../interfaces/paciente.model';
import { medicoReadDTO } from '../../../interfaces/medico.model';
import { CitaService } from '../../../services/cita.service';
import { PacienteService } from '../../../services/paciente.service';
import { MedicoService } from '../../../services/medico.service';
import { CentroMedicoService } from '../../../services/centro-medico.service';
import { CentroMedicoRead } from '../../../interfaces/centroMedico.model';

@Component({
  selector: 'app-cita-create',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './cita-create.component.html',
  styleUrl: './cita-create.component.css'
})
export class CitaCreateComponent {
  citaForm!: FormGroup;
  citas: CitaReadDTO[] = [];
  pacientes: PacienteReadDTO[] = [];
  medicos: medicoReadDTO[] = [];
  centrosMedicos: CentroMedicoRead[] = [];

  constructor(
    private readonly citasService: CitaService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly pacienteService: PacienteService,
    private readonly medicoService: MedicoService,
    private readonly centroMedicoService: CentroMedicoService
  ) { }

  ngOnInit(): void {
    this.citaForm = this.formBuilder.group({
      pacienteId: ['', [Validators.required]],
      medicoId: ['', [Validators.required]],
      centroMedicoId: ['', [Validators.required]],
      fechaHora: ['', [Validators.required]],
      duracionMinutos: [30, [Validators.required]],
      motivo: ['', [Validators.required, Validators.minLength(2)]],
    });

    this.pacienteService.obtenerPacientes().subscribe({
      next: (data) => {
        this.pacientes = data;
      },
      error: (error) => {
        console.log("Error al obtener pacientes", error);
      }
    });

    this.medicoService.obtenerMedicos().subscribe({
      next: (data) => {
        this.medicos = data;
      },
      error: (error) => {
        console.log("Error al obtener medicos", error);
      }
    });

    this.centroMedicoService.obtenerCentrosMedicos().subscribe({
      next: (data) => {
        this.centrosMedicos = data;
      },
      error: (error) => {
        console.log("Error al obtener centros medicos", error); 
      }
    });
  }

  enviarFormulario() {
    this.citaForm.markAllAsTouched();

    if (this.citaForm.invalid) {
      return;
    }

    const productData = this.citaForm.value;

    this.citasService.agregarCita(productData).subscribe({
      next: response => {
        this.router.navigate(['/citas']);
      },
      error : err => {
        console.log("Error al agregar cita", err);
      }
    });
  }



}
