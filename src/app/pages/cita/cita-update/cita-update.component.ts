import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, RouterLink, ActivatedRoute, Router } from '@angular/router';
import { CitaService } from '../../../services/cita.service';
import { PacienteService } from '../../../services/paciente.service';
import { MedicoService } from '../../../services/medico.service';
import { CentroMedicoService } from '../../../services/centro-medico.service';
import { PacienteReadDTO } from '../../../interfaces/paciente.model';
import { medicoReadDTO } from '../../../interfaces/medico.model';
import { CentroMedicoRead } from '../../../interfaces/centroMedico.model';
import { CitaUpdateDTO } from '../../../interfaces/cita.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cita-update',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './cita-update.component.html',
  styleUrl: './cita-update.component.css'
})
export class CitaUpdateComponent {
  private citaId!: number;   // ID de la cita a actualizar
  citaForm!: FormGroup;
  pacientes: PacienteReadDTO[] = [];
  medicos: medicoReadDTO[] = [];
  centrosMedicos: CentroMedicoRead[] = [];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private readonly citaService: CitaService,
    private readonly pacienteService: PacienteService,
    private readonly medicoService: MedicoService,
    private readonly centroMedicoService: CentroMedicoService
  ) {}

  ngOnInit(): void {
    // Obtener el ID de la cita de la URL
    this.citaId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.citaForm = this.fb.group({
      pacienteId: ['', [Validators.required]],
      medicoId: ['', [Validators.required]],
      centroMedicoId: ['', [Validators.required]],
      fechaHora: ['', [Validators.required]],
      duracionMinutos: [30, [Validators.required]],
      motivo: ['', [Validators.required, Validators.minLength(2)]],
    });

    // Cargar los datos de la cita a editar
    this.loadCitaData();

    // Cargar catálogos
    this.pacienteService.obtenerPacientes().subscribe({
      next: (data) => (this.pacientes = data),
      error: (err) => console.error('Error al obtener pacientes:', err),
    });

    this.medicoService.obtenerMedicos().subscribe({
      next: (data) => (this.medicos = data),
      error: (err) => console.error('Error al obtener médicos:', err),
    });

    this.centroMedicoService.obtenerCentrosMedicos().subscribe({
      next: (data) => (this.centrosMedicos = data),
      error: (err) => console.error('Error al obtener centros médicos:', err),
    });
  }

  // Cargar datos de la cita en el formulario
  loadCitaData() {
    this.citaService.obtenerCitaId(this.citaId).subscribe({
      next: (data) => {
        const fechaFormateada = formatDate(data.fechaHora, 'yyyy-MM-ddTHH:mm', 'en-US');
        this.citaForm.setValue({
          pacienteId: data.pacienteId,
          medicoId: data.medicoId,
          centroMedicoId: data.centroMedicoId,
          fechaHora: fechaFormateada,
          duracionMinutos: data.duracionMinutos,
          motivo: data.motivo,
        });
      },
      error: (err) => {
        console.error('Error al obtener cita:', err);
      },
    });
  }

  // Actualizar la cita
  updateCita() {
    if (this.citaForm.invalid) {
      this.citaForm.markAllAsTouched();
      return;
    }

    const updatedCita: CitaUpdateDTO = {
      ...this.citaForm.value,
    };

    this.citaService.editarCita(this.citaId, updatedCita).subscribe({
      next: () => {
        console.log('Cita actualizada');
        this.router.navigate(['/citas']); // Redirigir al listado
      },
      error: (err) => {
        console.error('Error al actualizar cita:', err);
      },
    });
  }
}
