import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JornadaLaboralResponse } from '../modelo/jornadaLaboralResponse';
import { JornadaLaboralService } from '../servicio/jornada-laboral.service';

@Component({
  selector: 'app-ver-una-jornada',
  templateUrl: './ver-una-jornada.component.html',
  styleUrls: ['./ver-una-jornada.component.scss']
})
export class VerUnaJornadaComponent implements OnInit {
  formularioBuscarJornada: FormGroup;

  public jornadaLaboral: JornadaLaboralResponse;

  error: boolean = false;
  jornadaEncontrada: boolean = false;
  mensajeError: string;

  constructor(private fb: FormBuilder, private jornadaLaboralServicio: JornadaLaboralService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.formularioBuscarJornada = this.fb.group({
      id: ['', [Validators.required]]
    });
  }

  onSubmit(): void{
    let id = this.formularioBuscarJornada.get('id')?.value;

    this.jornadaLaboralServicio.buscarJornadaPorId(id).subscribe({
      next: (res) => {
        this.jornadaLaboral = res;
        console.log(this.jornadaLaboral);
        this.error = false;
        this.jornadaEncontrada = true;
        this.formularioBuscarJornada.reset();
      },
      error: (error) => {
        this.jornadaEncontrada = false;
        this.mensajeError = error;
        this.error = true;
        this.formularioBuscarJornada.reset();
      }
    });
  }
}
