import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EspecialidadReadDTO } from '../../../interfaces/especialidad.model';
import { EspecialidadService } from '../../../services/especialidad.service';

@Component({
  selector: 'app-especialidad-list',
  imports: [RouterLink],
  templateUrl: './especialidad-list.component.html',
  styleUrl: './especialidad-list.component.css'
})
export class EspecialidadListComponent implements OnInit {

  especialidad : EspecialidadReadDTO[] = [];

  especialidadService = inject(EspecialidadService);


  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.especialidadService.obtenerEspecialidades().subscribe(
      (response) => {
        this.especialidad = response;
        console.log(response);
      }
    );
  }

}
