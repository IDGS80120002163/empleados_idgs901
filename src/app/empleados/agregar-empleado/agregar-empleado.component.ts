import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {
  nuevo: IEmpleado = {
    num_empleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fecha_nacimiento: new Date(),
    sexo: ''
  };

  mostrarFormulario: boolean = true;

  constructor(private empleadosService: EmpleadosService) { }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0 || this.nuevo.correo.trim().length === 0 || 
        this.nuevo.telefono.trim().length === 0 || this.nuevo.sexo.trim().length === 0) {
      return;
    }

    // Asigna el próximo número de empleado disponible
    this.nuevo.num_empleado = this.empleadosService.obtenerProximoNumeroEmpleado();

    this.empleadosService.agregarEmpleado(this.nuevo);

    this.nuevo = {
      num_empleado: 0,
      nombre: '',
      correo: '',
      telefono: '',
      fecha_nacimiento: new Date(),
      sexo: ''
    }
  }
}
