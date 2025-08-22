import { Component } from '@angular/core';
import { MedicamentoDTO } from '../../../interfaces/medicamento.model';
import { MedicamentoService } from '../../../services/medicamento.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-medicamento-delete',
  imports: [RouterLink],
  templateUrl: './medicamento-delete.component.html',
  styleUrl: './medicamento-delete.component.css'
})
export class MedicamentoDeleteComponent {
  medicId!: number;  // ID del producto a eliminar
  medicamentoData!: MedicamentoDTO;  // Datos del producto que se eliminará

  constructor(
    private medicamentoService: MedicamentoService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
      this.medicId = Number(this.route.snapshot.paramMap.get('id'));
      this.loadMedicamentoData();
  }

  loadMedicamentoData(){
    this.medicamentoService.obtenerMedicamentoById(this.medicId).subscribe( data => {
      const product = data;
      if(product){
        this.medicamentoData = product;
      }
    })
  }

  deleteMedicamento(){
    this.medicamentoService.deleteMedicamento(this.medicId).subscribe({
      next: () => {
        this.snackBar.open('Producto eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/medicamentos']);
      }
    });
  }
}

