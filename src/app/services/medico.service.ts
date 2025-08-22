import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicoReadDTO } from '../interfaces/medico.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http : HttpClient) { }

  public obtenerMedicos() : Observable <MedicoReadDTO[]>{
    return this.http.get<MedicoReadDTO[]>(environment.api.medico)
  }
}
