import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { MostrarUnEmpleadoComponent } from './empleado/mostrar-un-empleado/mostrar-un-empleado.component';
import { ActualizarJornadaComponent } from './jornada-laboral/actualizar-jornada/actualizar-jornada.component';
import { FormularioIngresoJornadaComponent } from './jornada-laboral/formulario-ingreso-jornada/formulario-ingreso-jornada.component';
import { VerUnaJornadaComponent } from './jornada-laboral/ver-una-jornada/ver-una-jornada.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'empleado/crear', pathMatch: 'full'
  },
  {
    path: 'empleado/crear',
    component: CrearEmpleadoComponent
  },
  {
    path: 'empleado/buscar',
    component: MostrarUnEmpleadoComponent
  },
  {
    path: 'jornada-laboral/ver',
    component: VerUnaJornadaComponent
  },
  {
    path: 'jornada-laboral/ingreso',
    component: FormularioIngresoJornadaComponent
  },
  {
    path: 'jornada-laboral/actualizar',
    component: ActualizarJornadaComponent
  },
  {
    path: '**', // Si se ingresa una ruta inválida, mostramos el componente que muestra mensaje "404 - not found"
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
