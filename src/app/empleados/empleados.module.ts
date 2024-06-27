import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { TablaEmpleadoComponent } from './tabla-empleado/tabla-empleado.component';
import { FormsModule } from '@angular/forms';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { EmpleadosService } from './empleados.service';



@NgModule({
  declarations: [
    PaginaInicioComponent,
    AgregarEmpleadoComponent,
    TablaEmpleadoComponent,
    ListadoEmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PaginaInicioComponent,
    TablaEmpleadoComponent,
    ListadoEmpleadosComponent
  ],
  providers: [
    EmpleadosService
  ]
})
export class EmpleadosModule { }
