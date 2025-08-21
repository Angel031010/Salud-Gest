export interface CitaCreateDTO {
  pacienteId: number;
  medicoId: number;
  centroMedicoId: number;
  fechaHora: string;
  duracionMinutos: number;
  motivo: string;
}

export interface CitaUpdateDTO {
  pacienteId: number;
  medicoId: number;
  centroMedicoId: number;
  fechaHora: string;
  duracionMinutos: number;
  motivo: string;
}

export interface CitaReadDTO {
  citaId: number;
  pacienteId: number;
  pacienteNombre: string;
  apellidoPaternoPaciente: string;
  apellidoMaternoPaciente: string;
  medicoId: number;
  medicoNombre: string;
  apellidoPaternoMedico: string;
  apellidoMaternoMedico: string;
  centroMedicoId: number;
  centroMedicoNombre: string;
  fechaHora: string;
  duracionMinutos: number;
  motivo: string;
}
