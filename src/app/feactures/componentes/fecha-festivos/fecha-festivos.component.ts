import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';

import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { FechaFestivoService } from '../../servicios/fecha-festivo.service';
import { Festivo } from '../../../core/entidades/Festivo';


@Component({
  selector: 'app-fecha-festivos',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatInputModule,
    MatTabsModule,
    MatNativeDateModule,
    ReferenciasMaterialModule,
    NgxDatatableModule,
  ],
  templateUrl: './fecha-festivos.component.html',
  styleUrls: ['./fecha-festivos.component.css']
})
export class FechaFestivosComponent {
  public textoBusqueda: string = "";
  public festivos: Festivo[] = [];

  public columnas = [
    { name: "Festivo", prop: "nombre" },
    { name: "Descripcion", prop: "descripcion" }
  ];

  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  fechaSeleccionada: any;

  constructor(private servicio: FechaFestivoService) {
    this.listar();
  }

  listar() {
    const anio = parseInt(this.textoBusqueda);
    if (!isNaN(anio)) {
      this.servicio.listar(anio).subscribe({
        next: (response) => {
          console.log('Datos recibidos:', response);
          this.festivos = response;
        },
        error: (error) => {
          console.error('Error fetching festivos:', error);
        },
      });
    } else {
      console.error('Año no válido:', this.textoBusqueda);
    }
  }

  verificar() {
    console.log('Función verificar() ejecutada');
    const fechaSeleccionada = this.fechaSeleccionada;
    const anio = fechaSeleccionada.getFullYear();
    const mes = fechaSeleccionada.getMonth() + 1;
    const dia = fechaSeleccionada.getDate();

    this.servicio.verificar(anio, mes, dia).subscribe({
      next: (response) => {
        if (response === 'Es Festivo') {
          alert('La fecha seleccionada es festiva.');
        } else {
          alert('La fecha seleccionada no es festiva.');
        }
      },
      error: (error) => {
        console.error('Error verificando la fecha:', error);
      }
    });
  }
}
