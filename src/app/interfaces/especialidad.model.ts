export interface EspecialidadReadDTO {
  idEspecialidad: number;
  nombre: string;
  descripcion: string;
}

export interface EspecialidadCreateDTO {
  nombre: string;
  descripcion: string;
}

export interface EspecialidadUpdateDTO {
  idEspecialidad?: number;
  nombre: string;
  descripcion: string;
}
