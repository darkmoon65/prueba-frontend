import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entidad } from '../class/entidad';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private url = "http://localhost:8080/api/Entidad";

  constructor(private httpClient: HttpClient) { }

  getListaEntidad():Observable<Entidad[]> {
    return this.httpClient.get<Entidad[]>(`${this.url}`);
  }
  //Metodo para crear una nueva entidad
  crearEntidad(entidad :Entidad): Observable<Object>{
    return this.httpClient.post(`${this.url}`, entidad);
  }

  //Metodo para actualizar una entidad
  actualizarEntidad(id:number, entidad :Entidad): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`, entidad);
  }
  
  getEntidadById(id:number): Observable<Entidad>{
    return this.httpClient.get<Entidad>(`${this.url}/${id}`);
  }

  eliminarEntidad(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
