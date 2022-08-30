import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from 'src/app/class/tipo-documento';
import { ActivatedRoute, Router} from '@angular/router';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-actualizar-tipo-documento',
  templateUrl: './actualizar-tipo-documento.component.html',
  styleUrls: ['./actualizar-tipo-documento.component.css']
})
export class ActualizarTipoDocumentoComponent implements OnInit {

  id: number;
  tipoDocumento: TipoDocumento;
  constructor(private route: ActivatedRoute,private router:Router, private servicioTipoDocumento: TipoDocumentoService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.tipoDocumento = new TipoDocumento();
    this.servicioTipoDocumento.getTipoDocumentoById(this.id).subscribe(data=>{
      this.tipoDocumento = data;
      
    })
  }

  sendQuery(){
    this.servicioTipoDocumento.actualizarTipoDocumento(this.id, this.tipoDocumento).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/home/tipoDocumento'])
    },error => console.log(error))
  }

}
