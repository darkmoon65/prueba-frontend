import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from '../../class/tipo-documento';
import { TipoDocumentoService } from '../../services/tipo-documento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-tipo-documento',
  templateUrl: './lista-tipo-documento.component.html',
  styleUrls: ['./lista-tipo-documento.component.css']
})
export class ListaTipoDocumentoComponent implements OnInit {

  listaTipoDocumento: TipoDocumento[];
  constructor(private tipoDocumentoServicio: TipoDocumentoService, private router: Router) { }

  ngOnInit() {
    this.getListaTipoDocumentos(); 
  }
  private getListaTipoDocumentos(){
    this.tipoDocumentoServicio.getListaTipoDocumento().subscribe(data => {
      this.listaTipoDocumento = data;
    })
  }
  actualizarTipoDocumento(id:number){
    this.router.navigate(['/home/actualizarTipoDocumento', id])
  }
  eliminarTipoDocumento(id:number){
    console.log(id)
    this.tipoDocumentoServicio.eliminarTipoDocumento(id).subscribe(data=>{
      this.getListaTipoDocumentos();
    })
  }
}
