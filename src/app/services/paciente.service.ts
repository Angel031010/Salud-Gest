import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PacienteReadDTO } from '../interfaces/paciente.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor( private http : HttpClient ) { }

  public obtenerPacientes() : Observable <PacienteReadDTO[]>{
    return this.http.get<PacienteReadDTO[]>(environment.api.pacientes);
  }
}
