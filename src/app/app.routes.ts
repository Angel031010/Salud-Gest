import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CentroMedicoListComponent } from './pages/centroMedico/centro-medico-list/centro-medico-list.component';
import { HomeComponent } from './pages/home/home.component';
import { PacienteListComponent } from './pages/pacientes/paciente-list/paciente-list.component';
import { EspecialidadListComponent } from './pages/especialidad/especialidad-list/especialidad-list.component';
import { ContactoPacienteListComponent } from './pages/contactoPaciente/contacto-paciente-list/contacto-paciente-list.component';
import { CitaListComponent } from './pages/cita/cita-list/cita-list.component';
import { CitaCreateComponent } from './pages/cita/cita-create/cita-create.component';


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
        path: 'paciente',
        component: PacienteListComponent
    },
    {
        path: 'especialidades',
        component: EspecialidadListComponent
    },
    {
        path: 'contactoPaciente',
        component: ContactoPacienteListComponent
    },
    {
        path: 'citas',
        component : CitaListComponent
    },
    {
        path: 'citas/create',
        component : CitaCreateComponent
    }

];
