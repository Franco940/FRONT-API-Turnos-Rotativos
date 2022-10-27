import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JornadaLaboralRequest } from '../modelo/jornadaLaboralRequest';
import { catchError, Observable, throwError } from 'rxjs';
import { JornadaLaboralUpdateDTO } from '../modelo/jornadaLaboralActualizarDTO';
import { JornadaLaboralResponse } from '../modelo/jornadaLaboralResponse';

@Injectable({
  providedIn: 'root'
})
export class JornadaLaboralService {

  constructor(private http: HttpClient) { }

  public crearJornada(jornadaLaboralRequest: JornadaLaboralRequest): Observable<any>{
    let url = environment.rutaApi + "jornada/laboral";
    return this.http.post(url, jornadaLaboralRequest).pipe(
      catchError(this.manejoDeErrores)
    );
  }

  public actualizarJornada(jornadaLaboralRequest: JornadaLaboralUpdateDTO){
    let url = environment.rutaApi + "jornada/laboral";
    return this.http.put(url, jornadaLaboralRequest).pipe(
      catchError(this.manejoDeErrores)
    );
  }

  public buscarJornadaPorId(id: number){
    let url = environment.rutaApi + "jornada?id=" + id;
    return this.http.get<JornadaLaboralResponse>(url).pipe(
      catchError(this.manejoDeErrores)
    );
  }

  manejoDeErrores(error: HttpErrorResponse){
    return throwError(() => error.error);
  }
}
