import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicoReadDTO } from '../interfaces/medico.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

  public obtenerMedicos(): Observable<MedicoReadDTO[]> {
      return this.http.get<MedicoReadDTO[]>(environment.api.medico)
    }
}
