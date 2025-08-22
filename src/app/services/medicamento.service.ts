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

  public agregarMedicamento(form:MedicamentoDTO): Observable<MedicamentoDTO>{
        return this.http.post<MedicamentoDTO>(`${environment.api.medicamentos}`, form);
      }

  public obtenerMedicamentoById(id:number): Observable<MedicamentoDTO>{
    return this.http.get<MedicamentoDTO>(`${environment.api.medicamentos}/${id}`);
      }
    
  public updateProduct(id:number,medicamento:MedicamentoDTO):Observable<MedicamentoDTO>{
    return this.http.put<MedicamentoDTO>(`${environment.api.medicamentos}/${id}`,medicamento);
  }

  public deleteMedicamento(id:number):Observable<MedicamentoDTO>{
    return this.http.delete<MedicamentoDTO>(`${environment.api.medicamentos}/${id}`);
  }
}