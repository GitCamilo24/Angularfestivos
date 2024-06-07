import { Routes } from '@angular/router';
import { InicioComponent } from './feactures/componentes/inicio/inicio.component';

import { FechaFestivosComponent } from './feactures/componentes/fecha-festivos/fecha-festivos.component';

export const routes: Routes = [
    { path: "inicio", component:InicioComponent},
    { path: "fecha-festivos", component:FechaFestivosComponent}

];
