import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProveedorMedicamentoReadDTO } from '../../../interfaces/proveedorMedicamento.model';
import { ProveedorMedicamentoService } from '../../../services/proveedor-medicamento.service';

@Component({
  selector: 'app-proveedor-medicamento-list',
  imports: [RouterLink],
  templateUrl: './proveedor-medicamento-list.component.html',
  styleUrl: './proveedor-medicamento-list.component.css'
})
export class ProveedorMedicamentoListComponent implements OnInit{

  proveedorMedicamento : ProveedorMedicamentoReadDTO[] = [];

  proveedorMedicamentoService = inject(ProveedorMedicamentoService);

  ngOnInit(): void {
    this.loadData();
  }

  loadData():void{
    this.proveedorMedicamentoService.obtenerProveedorMedicamentos().subscribe(data => {
        this.proveedorMedicamento = data;
        console.log(this.proveedorMedicamento);
      });
  }
}
