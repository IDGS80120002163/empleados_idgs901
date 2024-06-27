import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private _empleados: IEmpleado[] = [];

  get empleados(): IEmpleado[] {
    return this._empleados;
  }

  agregarEmpleado(empleado: IEmpleado){
    this._empleados.push(empleado);
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  eliminarEmpleado(num_empleado: number){
    this._empleados = this._empleados.filter(e => e.num_empleado !== num_empleado);
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  constructor() { 
    this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
  }

  obtenerProximoNumeroEmpleado(): number {
    if (this._empleados.length === 0) {
      return 1;
    }
    const maxNumEmpleado = Math.max(...this._empleados.map(e => e.num_empleado));
    return maxNumEmpleado + 1;
  }
}
