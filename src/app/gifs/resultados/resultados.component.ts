import { ReturnStatement } from '@angular/compiler';
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

get getValorBuscado()
{
  return this.servicio.getValorBuscado;

}
  constructor(private servicio: GifsService) { }


}
