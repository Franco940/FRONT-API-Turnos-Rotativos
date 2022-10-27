import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JornadaLaboralRequest } from '../modelo/jornadaLaboralRequest';
import { JornadaLaboralService } from '../servicio/jornada-laboral.service';

@Component({
  selector: 'app-formulario-ingreso-jornada',
  templateUrl: './formulario-ingreso-jornada.component.html',
  styleUrls: ['./formulario-ingreso-jornada.component.scss']
})
export class FormularioIngresoJornadaComponent implements OnInit {
  formularioCrearJornada: FormGroup;

  mensaje: string;
  creadoExito: boolean = false;
  creadoFallo: boolean = false;

  constructor(private fb: FormBuilder, private jornadaLaboralServicio: JornadaLaboralService) { }

  ngOnInit(): void {
    this.formularioCrearJornada = this.initForm();
  }

  initForm() {
    return this.formularioCrearJornada = this.fb.group({
      // Estas validaciones son iguales a las que hace la API
      nroDoc: ['', [Validators.required, Validators.min(1000000), Validators.max(999999999)]], // Mayor a 1.000.000 y menor a 999.999.999
      fecha: ['', [Validators.required]],
      horaComienzo: ['', [Validators.required]],
      horaFinalizacion: ['', [Validators.required]],
      tipoDeJornadaLaboral: ['', [Validators.required, Validators.pattern("^[a-zA-_ ]+$")]] // Acepta letras y espacios
    });
  }

  onSubmit(): void {
    this.agregarSegundosALaHora();
    this.sacarEspaciosEnElComienzoYFinal();

    let jornadaLaboralRequest = new JornadaLaboralRequest();
    jornadaLaboralRequest.numeroDeDocumento = this.formularioCrearJornada.get('nroDoc')?.value;
    jornadaLaboralRequest.fecha = this.formularioCrearJornada.get('fecha')?.value;
    jornadaLaboralRequest.horaComienzo = this.formularioCrearJornada.get('horaComienzo')?.value;
    jornadaLaboralRequest.horaFinalizacion = this.formularioCrearJornada.get('horaFinalizacion')?.value;
    jornadaLaboralRequest.tipoDeJornadaLaboral = this.formularioCrearJornada.get('tipoDeJornadaLaboral')?.value;

    this.jornadaLaboralServicio.crearJornada(jornadaLaboralRequest).subscribe({
      next: (res) => {
        this.creadoExito = true;
        this.creadoFallo = false;
        this.mensaje = 'Jornada creada correctamente'
        this.formularioCrearJornada.reset();
      },
      error: (error) => {
        this.mensaje = error;
        this.creadoExito = false;
        this.creadoFallo = true;
        this.formularioCrearJornada.reset();
      }
    });
  }

  limpiarMensajeDeError(): void {
    this.creadoExito = false;
    this.creadoFallo = false;
  }

  agregarSegundosALaHora(): void {
    // Para agergar los segundos
    let hora;
    hora = this.formularioCrearJornada.get('horaComienzo')?.value;
    hora += ":00";
    this.formularioCrearJornada.get('horaComienzo')?.setValue(hora);

    hora = this.formularioCrearJornada.get('horaFinalizacion')?.value;
    hora += ":00";
    this.formularioCrearJornada.get('horaFinalizacion')?.setValue(hora);
  }

  sacarEspaciosEnElComienzoYFinal(): void {
    // Para sacar posibles espacios del inicio y del final
    let jornada = this.formularioCrearJornada.get('tipoDeJornadaLaboral')?.value;
    jornada = jornada.trim();
    this.formularioCrearJornada.get('tipoDeJornadaLaboral')?.setValue(jornada)
  }
}
