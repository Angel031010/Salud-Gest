import { Component, inject, OnInit } from '@angular/core';
import { MedicoReadDTO } from '../../../interfaces/medico.model';
import { MedicoService } from '../../../services/medico.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medico-list',
  imports: [RouterLink],
  templateUrl: './medico-list.component.html',
  styleUrl: './medico-list.component.css'
})
export class MedicoListComponent implements OnInit {

  medico : MedicoReadDTO[] = [];
  
  medicoService = inject(MedicoService)

  ngOnInit(): void{
    this.loadData();
  }
  loadData(){
    this.medicoService.obtenerMedicos().subscribe((response) => {
      this.medico = response;
      console.log(response);
    })
  }
}
