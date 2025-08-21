import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { CentroMedicoRead } from '../interfaces/centroMedico.model';

@Injectable({
  providedIn: 'root'
})
export class CentroMedicoService {

  constructor( private http : HttpClient) { }

  public obtenerCentrosMedicos() : Observable<CentroMedicoRead[]>{
    return this.http.get<CentroMedicoRead[]>(environment.api.centrosMedicos)
  }
}
