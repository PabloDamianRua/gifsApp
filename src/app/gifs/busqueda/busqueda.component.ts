import {Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

export class BusquedaComponent {
@ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
@ViewChild('txtLimite') txtLimite!:ElementRef<HTMLInputElement>;
 

constructor(private gifService: GifsService)
{

}

buscar(){
  const valor = this.txtBuscar.nativeElement.value;
  const limite: number = Number(this.txtLimite.nativeElement.value);
  if(valor.trim().length === 0 ){ return;}
  if(limite == 0 ){ return;}
  
  this.gifService.buscarGifs(valor, limite);
  this.seleccionar();
}

actualizarLimite()
{
  this.gifService.actualizarLimite( Number(this.txtLimite.nativeElement.value));
}
seleccionar(){
  this.txtBuscar.nativeElement.select();
}

}
