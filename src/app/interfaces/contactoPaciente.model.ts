export enum TipoContactoPaciente {
    Emergencia = 0,
    Familiar = 1,
    Amigo = 2
}

export interface ContactoPacienteCreateDTO {
    pacienteId: number;
    tipoContacto: TipoContactoPaciente;
    calle: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    telefono: string;
}

export interface ContactoPacienteUpdateDTO {
    tipoContacto: TipoContactoPaciente;
    calle: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    telefono: string;
}

export interface ContactoPacienteReadDTO {
    contactoPacienteId: number;
    pacienteId: number;
    nombrePaciente: string;
    tipoContacto: TipoContactoPaciente;
    calle: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    telefono: string;
}
