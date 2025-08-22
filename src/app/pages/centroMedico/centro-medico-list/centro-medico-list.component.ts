import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CentroMedicoRead } from '../../../interfaces/centroMedico.model';
import { CentroMedicoService } from '../../../services/centro-medico.service';

@Component({
  selector: 'app-centro-medico-list',
  imports: [RouterLink],
  templateUrl: './centro-medico-list.component.html',
  styleUrl: './centro-medico-list.component.css'
})
export class CentroMedicoListComponent implements OnInit {

  centros: CentroMedicoRead[] = [];

  centroMedicoService = inject(CentroMedicoService);

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.centroMedicoService.obtenerCentrosMedicos().subscribe(data => {
      this.centros = data;
      console.log(this.centros);
    });
  }

  eliminarCentro(id: number): void {
    if (confirm('¿Deseas eliminar este centro medico?')) {
      this.centroMedicoService.eliminarCentroMedico(id).subscribe(() => {
        this.centros = this.centros.filter(c => c.centroMedicoId !== id);
      });
    }
  }
}
