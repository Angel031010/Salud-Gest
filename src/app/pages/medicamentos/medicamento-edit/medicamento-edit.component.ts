import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MedicamentoDTO } from '../../../interfaces/medicamento.model';
import { MedicamentoService } from '../../../services/medicamento.service';

@Component({
  selector: 'app-medicamento-edit',
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './medicamento-edit.component.html',
  styleUrl: './medicamento-edit.component.css'
})
export class MedicamentoEditComponent {
private medicId!: number;  // ID del medicamento a actualizar
  medicamentoForm!: FormGroup;  // Formulario reactivo
  medicData!: MedicamentoDTO;  // Datos del producto que se editarán

constructor(
  private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private medicamentoService: MedicamentoService,  // Servicio para interactuar con la API
    private router: Router  // Para redirigir al usuario después de la actualización
)  {}
ngOnInit():void{
  
  // Obtener el ID del producto de la URL
    this.medicId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.medicamentoForm = this.fb.group({
      medicamentoId: '',
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      codigo: ['', [Validators.required, Validators.minLength(5)]],
      lote: ['', [Validators.required]],
      sustancia: ['', [Validators.required]]
    });

    // Cargar los datos del producto para editar
    this.loadProductData();
  
}

// Cargar al formulario los datos del producto desde la API
  loadProductData() {
    this.medicamentoService.obtenerMedicamentoById(this.medicId).subscribe(data => {
        this.medicData = data;
        this.medicamentoForm.setValue({
          medicamentoId:data.medicamentoId,
          nombre: data.nombre,
          lote: data.lote,
          sustancia:data.sustancia,
          codigo: data.codigo
        });
    });
  }

  updateProduct() {
    if (this.medicamentoForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }
  console.log(this.medicamentoForm);
    const updatedMedicamento: MedicamentoDTO = {
      id: this.medicId,
      ...this.medicamentoForm.value  // Obtener los datos actualizados del formulario
    };

    this.medicamentoService.updateProduct(this.medicId, updatedMedicamento).subscribe({
      next: () => {
        console.log('Producto actualizado');
        this.router.navigate(['/medicamentos']);  // Redirigir a la lista de medicamentos
      },
      error: err => {
        console.error('Error al actualizar el producto:', err);
      }
    });
  }

}
