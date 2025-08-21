import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicamentoDTO } from '../interfaces/medicamento.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

   constructor( private http : HttpClient) { }

  public obtenerMedicamentos() : Observable<MedicamentoDTO[]>{
    return this.http.get<MedicamentoDTO[]>(environment.api.medicamentos)
  }
}
