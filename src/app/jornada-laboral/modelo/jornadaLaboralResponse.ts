import { Empleado } from "src/app/empleado/modelo/empleado";
import { TipoDeJornadaLaboral } from "./tipoDeJornadaLaboral";

export class JornadaLaboralResponse{
    id: number;
    fecha: string;
    horaComienzo: number;
    horaFinalizacion: number;
    horasTrabajadas: number;
    empleado: Empleado;
    tipoDeJornada: TipoDeJornadaLaboral;
}