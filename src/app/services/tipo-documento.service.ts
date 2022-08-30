import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDocumento } from '../class/tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  private url = "http://localhost:8080/api/TipoDocumento";
  
  constructor(private httpClient: HttpClient) { }

  //Metodo para listar los tipos de documentos
  getListaTipoDocumento():Observable<TipoDocumento[]> {
    return this.httpClient.get<TipoDocumento[]>(`${this.url}`);
  }

  //Metodo para crear un nuevo tipo de documento
  crearTipoDocumento(tipoDocumento :TipoDocumento): Observable<Object>{
    return this.httpClient.post(`${this.url}`, tipoDocumento);
  }

  //Metodo para actualizar un tipo de documento
  actualizarTipoDocumento(id:number, tipoDocumento :TipoDocumento): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`, tipoDocumento);
  }
  
  getTipoDocumentoById(id:number): Observable<TipoDocumento>{
    return this.httpClient.get<TipoDocumento>(`${this.url}/${id}`);
  }

  eliminarTipoDocumento(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
