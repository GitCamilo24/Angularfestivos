import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReferenciasMaterialModule } from './shared/modulos/referencias-material.module';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { T } from '@angular/cdk/keycodes';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReferenciasMaterialModule,
    MatToolbarModule,
    MatIconModule,
    
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Festivos';
}


