import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, RouterLink, ActivatedRoute, Router } from '@angular/router';
import { PacienteReadDTO } from '../../../interfaces/paciente.model';
import { ContactoPacienteService } from '../../../services/contacto-paciente.service';
import { PacienteService } from '../../../services/paciente.service';
import { ContactoPacienteReadDTO, ContactoPacienteUpdateDTO } from '../../../interfaces/contactoPaciente.model';

@Component({
  selector: 'app-contacto-paciente-update',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './contacto-paciente-update.component.html',
  styleUrl: './contacto-paciente-update.component.css'
})
export class ContactoPacienteUpdateComponent {
  private contactoId!: number;   // ID del contacto a actualizar
  contactosForm!: FormGroup;
  pacientes: PacienteReadDTO[] = [];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private readonly contactoPacienteService: ContactoPacienteService,
    private readonly pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    // Obtener el ID de la URL
    this.contactoId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.contactosForm = this.fb.group({
      pacienteId: ['', [Validators.required]],
      tipoContacto: ['', [Validators.required]],

      calle: ['', [Validators.required, Validators.minLength(3)]],
      ciudad: ['', [Validators.required, Validators.minLength(2)]],
      estado: ['', [Validators.required, Validators.minLength(2)]],
      codigoPostal: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });

    // Cargar datos del contacto
    this.loadContactoData();

    // Cargar pacientes
    this.pacienteService.obtenerPacientes().subscribe({
      next: (data) => (this.pacientes = data),
      error: (err) => console.error('Error al obtener pacientes:', err),
    });
  }

  // Cargar datos del contacto en el formulario
  loadContactoData() {
    this.contactoPacienteService.obtenerContactoId(this.contactoId).subscribe({
      next: (data: ContactoPacienteReadDTO) => {
        this.contactosForm.setValue({
          pacienteId: data.pacienteId,
          tipoContacto: data.tipoContacto,
          calle: data.calle,
          ciudad: data.ciudad,
          estado: data.estado,
          codigoPostal: data.codigoPostal,
          telefono: data.telefono,
        });
      },
      error: (err) => {
        console.error('Error al obtener contacto:', err);
      },
    });
  }

  // Actualizar contacto
  updateContacto() {
    if (this.contactosForm.invalid) {
      this.contactosForm.markAllAsTouched();
      return;
    }

    const updatedContacto: ContactoPacienteUpdateDTO = {
      ...this.contactosForm.value,
    };

    this.contactoPacienteService.editarContacto(this.contactoId, updatedContacto).subscribe({
      next: () => {
        console.log('Contacto actualizado');
        this.router.navigate(['/contactoPaciente']);
      },
      error: (err) => {
        console.error('Error al actualizar contacto:', err);
      },
    });
  }
}
