import { Component, inject, OnInit } from '@angular/core';
import { ContactoPacienteReadDTO } from '../../../interfaces/contactoPaciente.model';
import { ContactoPacienteService } from '../../../services/contacto-paciente.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto-paciente-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './contacto-paciente-list.component.html',
  styleUrl: './contacto-paciente-list.component.css'
})
export class ContactoPacienteListComponent implements OnInit{
  
  contactos : ContactoPacienteReadDTO[] = [];

  contactosPacientesService = inject(ContactoPacienteService);

  ngOnInit(): void {
      this.loadData();
  }

  loadData() : void {
    this.contactosPacientesService.obtenerContactosPacientes().subscribe( data => {
      this.contactos = data;
      console.log(this.contactos);
    });
  }

  eliminarContacto(id: number): void {
  if(confirm('¿Deseas eliminar este contacto?')) {
    this.contactosPacientesService.eliminarContacto(id).subscribe(() => {
      this.contactos = this.contactos.filter(c => c.contactoPacienteId !== id);
    });
  }
}


}
