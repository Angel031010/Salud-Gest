import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CitaReadDTO } from '../../../interfaces/cita.model';
import { CitaService } from '../../../services/cita.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cita-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './cita-list.component.html',
  styleUrl: './cita-list.component.css'
})
export class CitaListComponent implements OnInit {


  citas: CitaReadDTO[] = [];

  citaService = inject(CitaService);

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.citaService.obtenerCitas().subscribe(data => {
      this.citas = data;
      console.log(this.citas);
    })
  }

  eliminarCita(id: number): void {
    if (confirm('¿Deseas eliminar esta cita?')) {
      this.citaService.eliminarCita(id).subscribe(() => {
        this.citas = this.citas.filter(c => c.citaId !== id);
      });
    }
  }
}
