import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JornadaLaboralUpdateDTO } from '../modelo/jornadaLaboralActualizarDTO';
import { JornadaLaboralService } from '../servicio/jornada-laboral.service';

@Component({
  selector: 'app-actualizar-jornada',
  templateUrl: './actualizar-jornada.component.html',
  styleUrls: ['./actualizar-jornada.component.scss']
})
export class ActualizarJornadaComponent implements OnInit {
  formularioActualizarJornada: FormGroup;

  error: boolean = false;
  exito: boolean = false;
  mensaje: string;

  constructor(private fb: FormBuilder, private jornadaLaboralServicio: JornadaLaboralService) { }

  ngOnInit(): void {
    this.formularioActualizarJornada = this.formInit();
  }

  formInit(){
    return this.formularioActualizarJornada = this.fb.group({
      nroDoc: ['', [Validators.required, Validators.min(1000000), Validators.max(999999999)]], // Mayor a 1.000.000 y menor a 999.999.999
      fecha: ['', [Validators.required]],
      nuevasHoras: ['', [Validators.required, Validators.min(2), Validators.max(12)]]
    });
  }

  onSubmit(): void{
    let jornada = new JornadaLaboralUpdateDTO();
    jornada.numeroDeDocumento = this.formularioActualizarJornada.get('nroDoc')?.value;
    jornada.fechaDeLaJornada = this.formularioActualizarJornada.get('fecha')?.value;
    jornada.nuevasHorasDeTrabajo = this.formularioActualizarJornada.get('nuevasHoras')?.value;
    
    this.jornadaLaboralServicio.actualizarJornada(jornada).subscribe({
      next: (res) => {
        this.formularioActualizarJornada.reset();
        this.error = false;
        this.exito = true;
        this.mensaje = 'Jornada actualizada con éxito'
      },
      error: (error) => {
        this.mensaje = error;
        this.exito = false;
        this.error = true;
      }
    });
  }

  limpiarMensaje(): void{
    this.exito = false;
    this.error = false;
  }
}
