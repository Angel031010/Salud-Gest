import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MedicamentoDTO } from '../../../interfaces/medicamento.model';
import { MedicamentoService } from '../../../services/medicamento.service';

@Component({
  selector: 'app-medicamento',
  imports: [RouterLink],
  templateUrl: './medicamento.component.html',
  styleUrl: './medicamento.component.css'
})
export class MedicamentoComponent implements OnInit {
  medicamentos:MedicamentoDTO[]=[];
  medicamentosService=inject(MedicamentoService);

  ngOnInit(): void {
    this.loadData();
  }

  loadData() : void {
      this.medicamentosService.obtenerMedicamentos().subscribe( data => {
        this.medicamentos = data;
        console.log(this.medicamentos);
      });
  }

}
