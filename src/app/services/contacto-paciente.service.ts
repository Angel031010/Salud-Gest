import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactoPacienteCreateDTO, ContactoPacienteReadDTO, ContactoPacienteUpdateDTO } from '../interfaces/contactoPaciente.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactoPacienteService {


  constructor(private http: HttpClient) { }

  public obtenerContactosPacientes(): Observable<ContactoPacienteReadDTO[]> {
    return this.http.get<ContactoPacienteReadDTO[]>(environment.api.contactosPacientes)
  }

  public obtenerContactoId(id: number) : Observable<ContactoPacienteReadDTO>{
    return this.http.get<ContactoPacienteReadDTO>(`${environment.api.contactosPacientes}/${id}`);
  }

  public agregarContacto(contacto: ContactoPacienteCreateDTO) : Observable<ContactoPacienteCreateDTO>{
    return this.http.post<ContactoPacienteCreateDTO>(`${environment.api.contactosPacientes}`, contacto);
  }

  public editarContacto(id:number, contacto: ContactoPacienteUpdateDTO) : Observable<ContactoPacienteUpdateDTO>{
    return this.http.put<ContactoPacienteUpdateDTO>(`${environment.api.contactosPacientes}/${id}`, contacto);
  }

  public eliminarContacto(id: number) : Observable<void> {
    return this.http.delete<void>(`${environment.api.contactosPacientes}/${id}`)
  }
}
