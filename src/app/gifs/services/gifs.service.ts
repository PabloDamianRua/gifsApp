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

  public resultados:Gif[] =[];

  get historial()
  {
    //Los 3 puntos antes del this es para romper la referencia y evitar que se modifique la propiedad privada
    return [...this._historial] ;   
  }

constructor(private http: HttpClient)
{
  
}

  buscarGifs(query: string)
  {
    query = query.trim().toLowerCase();
    if(!this._historial.includes(query))
    {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      console.log(this._historial);
    }

    this.http.get<SearchGifsResponse>(`${this.urlApi}?api_key=qMcdVPMV4RvNFoCx13dsYZdCxmuynAzi&q=${query}&limit=10`)
      .subscribe( resp =>{
        this.resultados = resp.data;
      }
        )
  }


}
