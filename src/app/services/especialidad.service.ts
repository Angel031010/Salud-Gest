import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EspecialidadReadDTO } from '../interfaces/especialidad.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor( private http : HttpClient) { }

  public obtenerEspecialidades () : Observable <EspecialidadReadDTO[]>{
    return this.http.get<EspecialidadReadDTO[]>(environment.api.especialidades)
  }
}
