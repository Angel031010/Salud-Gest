import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MedicamentoDTO } from '../../../interfaces/medicamento.model';
import { MedicamentoService } from '../../../services/medicamento.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-medicamento-crear',
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './medicamento-crear.component.html',
  styleUrl: './medicamento-crear.component.css'
})
export class MedicamentoCrearComponent {
medicamentoForm!:FormGroup;
medic:MedicamentoDTO[]=[];

constructor(private readonly formBuilder: FormBuilder,private readonly medicamentoService:MedicamentoService,private readonly router: Router){}
ngOnInit():void{
  this.medicamentoForm=this.formBuilder.group({
    nombre:['',[Validators.required]],
    sustancia:['',[Validators.required]],
    lote:['',[Validators.required]],
    codigo:['',[Validators.required]]
  })
}

enviarFormulario() {
    this.medicamentoForm.markAllAsTouched();

    if (this.medicamentoForm.invalid) {
      return;
    }

    const productData = this.medicamentoForm.value;

    this.medicamentoService.agregarMedicamento(productData).subscribe({
      next: response => {
        this.router.navigate(['/medicamentos']);
      },
      error : err => {
        console.log("Error al agregar medicamento", err);
      }
    });
  }

}
