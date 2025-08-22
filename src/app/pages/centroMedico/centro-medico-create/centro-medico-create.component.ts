import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CentroMedicoService } from '../../../services/centro-medico.service';

@Component({
  selector: 'app-centro-medico-create',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './centro-medico-create.component.html',
  styleUrl: './centro-medico-create.component.css'
})
export class CentroMedicoCreateComponent implements OnInit {

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly centroService = inject(CentroMedicoService);

  centroForm!: FormGroup;
  selectedFile!: File;

  ngOnInit(): void {
    this.centroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      codigo: ['', [Validators.required, Validators.minLength(2)]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]],
      email: ['', [Validators.required, Validators.email]],
      file: [null, [Validators.required]]
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.centroForm.patchValue({ file: this.selectedFile });
    this.centroForm.get('file')?.updateValueAndValidity();
  }

  enviarFormulario(): void {
    this.centroForm.markAllAsTouched();

    if (this.centroForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('nombre', this.centroForm.get('nombre')!.value);
    formData.append('codigo', this.centroForm.get('codigo')!.value);
    formData.append('direccion', this.centroForm.get('direccion')!.value);
    formData.append('telefono', this.centroForm.get('telefono')!.value);
    formData.append('email', this.centroForm.get('email')!.value);
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.centroService.postCentrosMedico(formData).subscribe({
      next: () => this.router.navigate(['/centro-medico']),
      error: (err) => console.error("Error al crear centro médico", err)
    });
  }
}
