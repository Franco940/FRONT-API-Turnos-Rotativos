import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from '../modelo/empleado';
import { EmpleadoService } from '../servicio/empleado.service';

@Component({
  selector: 'app-mostrar-un-empleado',
  templateUrl: './mostrar-un-empleado.component.html',
  styleUrls: ['./mostrar-un-empleado.component.scss']
})
export class MostrarUnEmpleadoComponent implements OnInit {
  formularioBuscarEmpleado: FormGroup;
  
  public empleado: Empleado;
  mensajeError: string;
  error: boolean = false;
  encontrado: boolean = false;


  constructor(private fb: FormBuilder, private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.formularioBuscarEmpleado = this.initForm();
  }

  initForm() {
    return this.formularioBuscarEmpleado = this.fb.group({
      // Estas validaciones son iguales a las que hace la API
      id: ['', [Validators.required]]
    });
  }

  onSubmit(): void{
    let id = this.formularioBuscarEmpleado.get('id')?.value;

    this.empleadoServicio.buscarEmpleadoPorId(id).subscribe({
      next: (res) => {
        this.empleado = res;
        this.error = false;
        this.encontrado = true;
        this.formularioBuscarEmpleado.reset();
      },
      error: (error) => {
        this.encontrado = false;
        this.mensajeError = error;
        this.error = true;
        this.formularioBuscarEmpleado.reset();
      }
    });
  }
}
