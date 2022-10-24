import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

get getResultados()
{
  return this.servicio.resultados;
}
  constructor(private servicio: GifsService) { }



}
