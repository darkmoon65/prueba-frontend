import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entidad } from 'src/app/class/entidad';
import { TipoContribuyente } from 'src/app/class/tipo-contribuyente';
import { TipoDocumento } from 'src/app/class/tipo-documento';
import { EntidadService } from 'src/app/services/entidad.service';
import { TipoContribuyenteService } from 'src/app/services/tipo-contribuyente.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-actualizar-entidad',
  templateUrl: './actualizar-entidad.component.html',
  styleUrls: ['./actualizar-entidad.component.css']
})
export class ActualizarEntidadComponent implements OnInit {

  id: number;
  entidad: Entidad;
  tipoDocumentos: TipoDocumento[];
  tipoContribuyentes: TipoContribuyente[];

  constructor(
    private route: ActivatedRoute,
    private router:Router, 
    private servicioEntidad: EntidadService,
    private servicioTipoDocumento: TipoDocumentoService,
    private servicioTipoContribuyente: TipoContribuyenteService
    
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.entidad = new Entidad();
    this.servicioEntidad.getEntidadById(this.id).subscribe(data=>{
      this.entidad = data;
      console.log(this.entidad);
    })
    this.servicioTipoDocumento.getListaTipoDocumento().subscribe(data=>{
      this.tipoDocumentos = data;
    })
    this.servicioTipoContribuyente.getListaTipoContribuyente().subscribe(data=>{
      this.tipoContribuyentes = data;
    })
  }

  sendQuery(){
    this.servicioEntidad.actualizarEntidad(this.id, this.entidad).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/home/entidad'])
    },error => console.log(error))
  }

}
