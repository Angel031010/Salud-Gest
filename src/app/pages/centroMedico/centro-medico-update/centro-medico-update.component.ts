import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, RouterLink, ActivatedRoute, Router } from '@angular/router';
import { CentroMedicoService } from '../../../services/centro-medico.service';
import { CentroMedicoUpdate } from '../../../interfaces/centroMedico.model';

@Component({
  selector: 'app-centro-medico-update',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './centro-medico-update.component.html',
  styleUrl: './centro-medico-update.component.css'
})
export class CentroMedicoUpdateComponent {
  private centroId!: number;   // ID del centro médico a actualizar
  centroForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private readonly centroMedicoService: CentroMedicoService
  ) {}

  ngOnInit(): void {
    // Obtener el ID del centro médico de la URL
    this.centroId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.centroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      codigo: ['', [Validators.required, Validators.minLength(2)]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]],
      email: ['', [Validators.required, Validators.email]]
    });

    // Cargar los datos del centro a editar
    this.loadCentroData();
  }

  // Cargar datos del centro en el formulario
  loadCentroData() {
    this.centroMedicoService.obtenerCentroMedico(this.centroId).subscribe({
      next: (data) => {
        this.centroForm.setValue({
          nombre: data.nombre,
          codigo: data.codigo,
          direccion: data.direccion,
          telefono: data.telefono,
          email: data.email
        });
      },
      error: (err) => {
        console.error('Error al obtener centro médico:', err);
      },
    });
  }

  // Actualizar centro médico
  updateCentro() {
  if (this.centroForm.invalid) {
    this.centroForm.markAllAsTouched();
    return;
  }

  const formData = new FormData();
  formData.append('nombre', this.centroForm.get('nombre')!.value);
  formData.append('codigo', this.centroForm.get('codigo')!.value);
  formData.append('direccion', this.centroForm.get('direccion')!.value);
  formData.append('telefono', this.centroForm.get('telefono')!.value);
  formData.append('email', this.centroForm.get('email')!.value);

  this.centroMedicoService.putCentrosMedico(this.centroId, formData).subscribe({
    next: () => {
      console.log('Centro médico actualizado');
      this.router.navigate(['/centro-medico']);
    },
    error: (err) => {
      console.error('Error al actualizar centro médico:', err);
      this.router.navigate(['/centro-medico']);
    },
  });
}

}
