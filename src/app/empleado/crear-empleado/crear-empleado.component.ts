import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from '../modelo/empleado';
import { EmpleadoService } from '../servicio/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.scss']
})
export class CrearEmpleadoComponent implements OnInit {
  formularioCrearEmpleado: FormGroup;

  guardadoExitoso: boolean = false;
  guardadoFallado: boolean = false;
  mensaje: string;

  constructor(private fb: FormBuilder, private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.formularioCrearEmpleado = this.initForm();
  }

  initForm() {
    return this.formularioCrearEmpleado = this.fb.group({
      // Estas validaciones son iguales a las que hace la API
      nombre: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]], // Solo acepta letras
      apellido: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]], // Solo acepta letras
      nroDoc: ['', [Validators.required, Validators.min(1000000), Validators.max(999999999)]], // Mayor a 1.000.000 y menor a 999.999.999
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    let empleado = new Empleado();
    empleado.nombre = this.formularioCrearEmpleado.get('nombre')?.value;
    empleado.apellido = this.formularioCrearEmpleado.get('apellido')?.value;
    empleado.numeroDeDocumento = this.formularioCrearEmpleado.get('nroDoc')?.value;
    empleado.email = this.formularioCrearEmpleado.get('email')?.value;

    this.empleadoServicio.crearEmpleado(empleado).subscribe({
      next: (res) => {
        this.formularioCrearEmpleado.reset();
        this.guardadoFallado = false;
        this.guardadoExitoso = true;
        this.mensaje = 'Empleado creado correctamente'
      },
      error: (error) => {
        this.mensaje = error;
        this.guardadoExitoso = false;
        this.guardadoFallado = true;
      }
    });
  }

  limpiarMensajeDeError(): void{
    this.guardadoExitoso = false;
    this.guardadoFallado = false;
  }
}
