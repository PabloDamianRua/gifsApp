import { Component} from '@angular/core';
import { retry } from 'rxjs';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private servicio: GifsService) { }

 get histirorialBusqueda() 
 {
  return this.servicio.historial;
 }

 get getLimite():number
 {
  return this.servicio.getLimite;
 }

 
 buscar(termino:string, limite: number)
 {
  this.servicio.buscarGifs(termino, limite);
 }
}
