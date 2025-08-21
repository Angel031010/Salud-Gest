export interface medicoReadDTO{
    medicoId: number;
    nombre: string;
    ApPaterno: string;
    ApMaterno: string;
    Matricula: string;
    Telefono: string;
    Email: string;
    EspecialidadId:number;
    CentroMedicoId:number;
}

export interface medicoCreateDTO{
    nombre: string;
    ApPaterno: string;
    ApMaterno: string;
    Matricula: string;
    Telefono: string;
    Email: string;
    EspecialidadId:number;
    CentroMedicoId:number;
}


