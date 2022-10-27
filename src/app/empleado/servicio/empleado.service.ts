import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado } from '../modelo/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  public crearEmpleado(empleadoRequest: Empleado): Observable<any>{
    let url = environment.rutaApi + "empleado";
    return this.http.post(url, empleadoRequest).pipe(
      catchError(this.manejoDeErrores)
    );
  }

  public buscarEmpleadoPorId(id: number): Observable<Empleado>{
    let url = environment.rutaApi + "empleado?id=" + id;
    return this.http.get<Empleado>(url).pipe(
      catchError(this.manejoDeErrores)
    );
  }


  manejoDeErrores(error: HttpErrorResponse){
    return throwError(() => error.error);
  }
}
