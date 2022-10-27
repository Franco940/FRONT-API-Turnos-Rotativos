import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioIngresoJornadaComponent } from './formulario-ingreso-jornada/formulario-ingreso-jornada.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActualizarJornadaComponent } from './actualizar-jornada/actualizar-jornada.component';
import { VerUnaJornadaComponent } from './ver-una-jornada/ver-una-jornada.component';



@NgModule({
  declarations: [
    FormularioIngresoJornadaComponent,
    ActualizarJornadaComponent,
    VerUnaJornadaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class JornadaLaboralModule { }
