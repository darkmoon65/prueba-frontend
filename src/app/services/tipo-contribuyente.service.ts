import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoContribuyente } from '../class/tipo-contribuyente';

@Injectable({
  providedIn: 'root'
})
export class TipoContribuyenteService {

  private url = "http://localhost:8080/api/TipoContribuyente";

  constructor(private httpClient: HttpClient) { }

  getListaTipoContribuyente():Observable<TipoContribuyente[]> {
    return this.httpClient.get<TipoContribuyente[]>(`${this.url}`);
  }
  //Metodo para crear un nuevo tipo de contribuyente
  crearTipoContribuyente(tipoContribuyente :TipoContribuyente): Observable<Object>{
    return this.httpClient.post(`${this.url}`, tipoContribuyente);
  }

  //Metodo para actualizar un tipo de contribuyente
  actualizarTipoContribuyente(id:number, tipoContribuyente :TipoContribuyente): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`, tipoContribuyente);
  }
  
  getTipoContribuyenteById(id:number): Observable<TipoContribuyente>{
    return this.httpClient.get<TipoContribuyente>(`${this.url}/${id}`);
  }

  eliminarTipoContribuyente(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
