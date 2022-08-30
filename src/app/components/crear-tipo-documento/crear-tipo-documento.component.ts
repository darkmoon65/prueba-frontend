import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from 'src/app/class/tipo-documento';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-tipo-documento',
  templateUrl: './crear-tipo-documento.component.html',
  styleUrls: ['./crear-tipo-documento.component.css']
})
export class CrearTipoDocumentoComponent implements OnInit {

  tipoDocumento : TipoDocumento = new TipoDocumento()
  constructor(private servicioTipoDocumento: TipoDocumentoService, private router:Router) { }

  ngOnInit() {
  }

  crearTipoDocumento(){
    this.servicioTipoDocumento.crearTipoDocumento(this.tipoDocumento).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/home/tipoDocumento'])
    },error => console.log(error))

  }
  sendQuery(){
    this.crearTipoDocumento();
  }

}
