import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitaCreateDTO, CitaReadDTO, CitaUpdateDTO } from '../interfaces/cita.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient) { }

  public obtenerCitas(): Observable<CitaReadDTO[]> {
      return this.http.get<CitaReadDTO[]>(environment.api.citas)
    }
  
    public obtenerCitaId(id: number) : Observable<CitaReadDTO>{
      return this.http.get<CitaReadDTO>(`${environment.api.citas}/${id}`);
    }
  
    public agregarCita(contacto: CitaCreateDTO) : Observable<CitaCreateDTO>{
      return this.http.post<CitaCreateDTO>(`${environment.api.citas}`, contacto);
    }
  
    public editarCita(id:number, contacto: CitaUpdateDTO) : Observable<CitaUpdateDTO>{
      return this.http.put<CitaUpdateDTO>(`${environment.api.citas}/${id}`, contacto);
    }
  
    public eliminarCita(id: number) : Observable<void> {
      return this.http.delete<void>(`${environment.api.citas}/${id}`)
    }
}
