import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { CentroMedicoRead } from '../interfaces/centroMedico.model';

@Injectable({
  providedIn: 'root'
})
export class CentroMedicoService {

  constructor(private http: HttpClient) { }

  public obtenerCentrosMedicos(): Observable<CentroMedicoRead[]> {
    return this.http.get<CentroMedicoRead[]>(environment.api.centrosMedicos)
  }

  public obtenerCentroMedico(id: number) : Observable<CentroMedicoRead>{
        return this.http.get<CentroMedicoRead>(`${environment.api.centrosMedicos}/${id}`);
      }

  public postCentrosMedico(formData: FormData): Observable<any> {
    return this.http.post(environment.api.centrosMedicos, formData);
  }

  public putCentrosMedico(id: number, formData: FormData): Observable<any> {
    return this.http.put(`${environment.api.centrosMedicos}/${id}`, formData);
  }

  public eliminarCentroMedico(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api.centrosMedicos}/${id}`)
  }
}
