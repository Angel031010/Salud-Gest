import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CentroMedicoListComponent } from './pages/centroMedico/centro-medico-list/centro-medico-list.component';
import { HomeComponent } from './pages/home/home.component';
import { PacienteListComponent } from './pages/pacientes/paciente-list/paciente-list.component';
import { EspecialidadListComponent } from './pages/especialidad/especialidad-list/especialidad-list.component';
import { MedicamentoComponent } from './pages/medicamentos/medicamento/medicamento.component';
import { ContactoPacienteListComponent } from './pages/contactoPaciente/contacto-paciente-list/contacto-paciente-list.component';
import { CitaListComponent } from './pages/cita/cita-list/cita-list.component';
import { CitaCreateComponent } from './pages/cita/cita-create/cita-create.component';
import { CitaUpdateComponent } from './pages/cita/cita-update/cita-update.component';
import { CitaDeleteComponent } from './pages/cita/cita-delete/cita-delete.component';
import { ContactoPacienteCreateComponent } from './pages/contactoPaciente/contacto-paciente-create/contacto-paciente-create.component';
import { ContactoPacienteUpdateComponent } from './pages/contactoPaciente/contacto-paciente-update/contacto-paciente-update.component';
import { CentroMedicoCreateComponent } from './pages/centroMedico/centro-medico-create/centro-medico-create.component';
import { CentroMedicoUpdateComponent } from './pages/centroMedico/centro-medico-update/centro-medico-update.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'centro-medico',
        component: CentroMedicoListComponent
    },
    {
        path: 'centro-medico/create',
        component: CentroMedicoCreateComponent
    },
    {
        path: 'centro-medico/edit/:id',
        component: CentroMedicoUpdateComponent
    },
    {
        path: 'paciente',
        component: PacienteListComponent
    },
    {
        path: 'especialidades',
        component: EspecialidadListComponent
    },
    {
        path: 'medicamentos',
        component: MedicamentoComponent
    },
    {
        path: 'contactoPaciente',
        component: ContactoPacienteListComponent
    },
    {
        path: 'contactoPaciente/create',
        component: ContactoPacienteCreateComponent
    },
    {
        path: 'contactoPaciente/edit/:id',
        component: ContactoPacienteUpdateComponent
    },
    /*{
        path: 'contactoPaciente/delete/:id',
        component: ContactoPacienteDeleteComponent
    }*/
    {
        path: 'citas',
        component: CitaListComponent
    },
    {
        path: 'citas/create',
        component: CitaCreateComponent
    },
    {
        path: 'citas/edit/:id',
        component: CitaUpdateComponent
    },
    {
        path: 'citas/delete/:id',
        component: CitaDeleteComponent
    }

];
