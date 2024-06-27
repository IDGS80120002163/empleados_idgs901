import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-tabla-empleado',
  templateUrl: './tabla-empleado.component.html',
  styleUrls: ['./tabla-empleado.component.css']
})
export class TablaEmpleadoComponent {
  constructor(private empleadosService: EmpleadosService) {}

  get empleados(): IEmpleado[] {
    return this.empleadosService.empleados;
  }

  eliminarEmpleado(num_empleado: number) {
    this.empleadosService.eliminarEmpleado(num_empleado);
  }
}
