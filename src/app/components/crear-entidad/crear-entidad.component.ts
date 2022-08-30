import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entidad } from 'src/app/class/entidad';
import { TipoContribuyente } from 'src/app/class/tipo-contribuyente';
import { TipoDocumento } from 'src/app/class/tipo-documento';
import { EntidadService } from 'src/app/services/entidad.service';
import { TipoContribuyenteService } from 'src/app/services/tipo-contribuyente.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-crear-entidad',
  templateUrl: './crear-entidad.component.html',
  styleUrls: ['./crear-entidad.component.css']
})
export class CrearEntidadComponent implements OnInit {

  
  entidad : Entidad = new Entidad();
  tipoDocumentos: TipoDocumento[];
  tipoContribuyentes: TipoContribuyente[];

  constructor(
    private servicioEntidad: EntidadService, 
    private router:Router,
    private servicioTipoDocumento: TipoDocumentoService,
    private servicioTipoContribuyente: TipoContribuyenteService

    ) { }

  ngOnInit() {
    this.servicioTipoDocumento.getListaTipoDocumento().subscribe(data=>{
      this.tipoDocumentos = data;
    })
    this.servicioTipoContribuyente.getListaTipoContribuyente().subscribe(data=>{
      this.tipoContribuyentes = data;
    })
  }

  crearEntidad(){
    this.servicioEntidad.crearEntidad(this.entidad).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/home/entidad'])
    },error => console.log(error))

  }
  sendQuery(){
    this.crearEntidad();
  }
}
