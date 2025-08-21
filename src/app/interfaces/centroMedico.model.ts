export interface CentroMedicoRead {
  centroMedicoId: number;
  nombre: string;
  codigo: string;
  direccion: string;
  telefono: string;
  email: string;
  imagenUrl: string;
}

export interface CentroMedicoUpdate {
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
  file?: string;
}

export interface CentroMedicoCreate {
  nombre: string;
  codigo: string;
  direccion: string;
  telefono: string;
  email: string;
  file: string;
}
