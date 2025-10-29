import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DatosCompartidosService } from './services/datos-compartidos.service';
import { environment } from '../environments/environment'; // ✅ NEW

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hotel Copo de nieve';
  esconderBuscador = false;
  esconderFooter = false;
  envName = environment.envName; // ✅ NEW

  constructor(
    private router: Router,
    private titleService: Title,
    public datosCompartidosService: DatosCompartidosService
  ) {
    this.datosCompartidosService.esconderBuscador.subscribe(
      esconderBuscador => {
        this.esconderBuscador = esconderBuscador;
      }
    );

    this.datosCompartidosService.esconderFooter.subscribe(
      esconderFooter => {
        this.esconderFooter = esconderFooter;
      }
    );
  }

  ngOnInit() {
    this.titleService.setTitle('Hotel Copo de Nieve');
  }
}
