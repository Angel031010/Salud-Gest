export interface PacienteCreateDTO {
  pacienteId: number;
  nombre: string;
  apPaterno: string;
  apMaterno: string;
  fechaNacimiento: Date;
  telefono: number;
  file: string;
  email: string;
}

export interface PacienteReadDTO {
  pacienteId: number;
  nombre: string;
  apPaterno: string;
  apMaterno: string;
  fechaNacimiento: Date;
  telefono: number;
  urlFoto: string;
  email: string;
}