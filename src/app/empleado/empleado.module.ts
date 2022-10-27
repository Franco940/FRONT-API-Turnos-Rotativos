import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { HttpClientModule } from '@angular/common/http';
import { MostrarUnEmpleadoComponent } from './mostrar-un-empleado/mostrar-un-empleado.component';



@NgModule({
  declarations: [
    CrearEmpleadoComponent,
    MostrarUnEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EmpleadoModule { }
