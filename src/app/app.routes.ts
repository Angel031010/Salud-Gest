import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CentroMedicoListComponent } from './pages/centroMedico/centro-medico-list/centro-medico-list.component';
import { HomeComponent } from './pages/home/home.component';
import { PacienteListComponent } from './pages/pacientes/paciente-list/paciente-list.component';
import { EspecialidadListComponent } from './pages/especialidad/especialidad-list/especialidad-list.component';
import { MedicamentoComponent } from './pages/medicamentos/medicamento/medicamento.component';


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
    path:'medicamentos',
    component:MedicamentoComponent
  }

];
