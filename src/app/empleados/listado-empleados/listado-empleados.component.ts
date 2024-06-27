import { Component, Input } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css'
})
export class ListadoEmpleadosComponent {

  //Inyectamos el servicio de los empleados al componente
  constructor(private empleadosService: EmpleadosService){}

  //Definimos un método get para obtener la lista desde el sevicio
  get empleados(): IEmpleado[]{
    return this.empleadosService.empleados;
  }

}
