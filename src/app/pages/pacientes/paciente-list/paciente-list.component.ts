import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PacienteReadDTO } from '../../../interfaces/paciente.model';
import { PacienteService } from '../../../services/paciente.service';
import { CommonModule ,DatePipe } from '@angular/common';

@Component({
  selector: 'app-paciente-list',
  imports: [RouterLink],
  templateUrl: './paciente-list.component.html',
  styleUrl: './paciente-list.component.css',
  providers: [DatePipe]
})
export class PacienteListComponent implements OnInit{
  
  pacientes : PacienteReadDTO[] = [];

  pacienteService = inject(PacienteService);
  datePipe = inject(DatePipe);

  ngOnInit(): void {
    this.loadData();
  }

  loadData() : void{
    this.pacienteService.obtenerPacientes().subscribe( data => {
      this.pacientes = data;
      console.log(this.pacientes);
      
    })
  }

  formatearFecha(fecha: Date): string {
    return this.datePipe.transform(fecha, 'dd/MM/yyyy') ?? '';
  }
}
