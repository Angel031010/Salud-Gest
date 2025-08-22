import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProveedorMedicamentoReadDTO } from '../interfaces/proveedorMedicamento.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedorMedicamentoService {

  constructor(private http : HttpClient) { }

  public obtenerProveedorMedicamentos() : Observable <ProveedorMedicamentoReadDTO[]>{
    return this.http.get<ProveedorMedicamentoReadDTO[]>(environment.api.proveedorMedicamento);
  }
}
