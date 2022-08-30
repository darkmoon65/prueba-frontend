import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entidad } from 'src/app/class/entidad';
import { EntidadService } from 'src/app/services/entidad.service';

@Component({
  selector: 'app-lista-entidad',
  templateUrl: './lista-entidad.component.html',
  styleUrls: ['./lista-entidad.component.css']
})
export class ListaEntidadComponent implements OnInit {

  
  listaEntidad: Entidad[];

  constructor(private servicioEntidad : EntidadService,private router: Router) { }

  ngOnInit() {
    this.getListaEntidad();
  }

  private getListaEntidad(){
    this.servicioEntidad.getListaEntidad().subscribe(data=>{
      this.listaEntidad = data;
    })
  }
  actualizarEntidad(id:number){
    this.router.navigate(['/home/actualizarEntidad', id])
  }
  eliminarEntidad(id:number){
    console.log(id)
    this.servicioEntidad.eliminarEntidad(id).subscribe(data=>{
      this.getListaEntidad();
    })
  }
}
