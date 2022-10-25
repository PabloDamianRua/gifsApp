import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] =[];
  private apiKey ='qMcdVPMV4RvNFoCx13dsYZdCxmuynAzi';
  private urlApi ='https://api.giphy.com/v1/gifs/search';
  private _valorBuscado= '';
  private _limite: number = 10;
  public resultados:Gif[] =[];

  get historial()
  {
    //Los 3 puntos antes del this es para romper la referencia y evitar que se modifique la propiedad privada
    return [...this._historial] ;   
  }
  get getValorBuscado()
  {
    return this._valorBuscado;
  }

  get getLimite()
  {
    return this._limite;
  }
constructor(private http: HttpClient)
{
  this._historial = JSON.parse(localStorage.getItem('historial')!) ||[];
  this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
}
actualizarLimite(limite: number)
{
  this._limite = limite;
}
  buscarGifs(query: string, limite: number)
  {
    query = query.trim().toLowerCase();
    this._valorBuscado = query;
    this._limite = limite;

    if(!this._historial.includes(query))
    {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this.historial));
    }

    this.http.get<SearchGifsResponse>(`${this.urlApi}?api_key=qMcdVPMV4RvNFoCx13dsYZdCxmuynAzi&q=${query}&limit=${limite}`)
      .subscribe( resp =>{
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      }
        )
  }
}
