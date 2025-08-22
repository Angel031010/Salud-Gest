export interface MedicoReadDTO{
    medicoId: number;
    nombre: string;
    apPaterno: string;
    apMaterno: string;
    matricula: string;
    telefono: string;
    email: string;
    especialidadId:number;
    centroMedicoId:number;
}

export interface medicoCreateDTO{
    nombre: string;
    apPaterno: string;
    apMaterno: string;
    matricula: string;
    telefono: string;
    email: string;
    especialidadId:number;
    centroMedicoId:number;
}


