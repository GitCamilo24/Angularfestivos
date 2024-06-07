import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Festivo } from '../../core/entidades/Festivo';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class FechaFestivoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}festivos/`;
  }

  listar(anio: number): Observable<Festivo[]> {
    return this.http.get<any>(`${this.url}listar/${anio}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  verificar(anio: number, mes: number, dia: number): Observable<string> {
    return this.http.get<any>(`${this.url}verificarFecha/${anio}/${mes}/${dia}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}



