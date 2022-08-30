import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoContribuyente } from 'src/app/class/tipo-contribuyente';
import { TipoContribuyenteService } from 'src/app/services/tipo-contribuyente.service';

@Component({
  selector: 'app-crear-tipo-contribuyente',
  templateUrl: './crear-tipo-contribuyente.component.html',
  styleUrls: ['./crear-tipo-contribuyente.component.css']
})
export class CrearTipoContribuyenteComponent implements OnInit {

  tipoContribuyente : TipoContribuyente= new TipoContribuyente()
  constructor(private servicioTipoContribuyente: TipoContribuyenteService, private router:Router) { }

  ngOnInit() {
  }

  crearTipoContribuyente(){
    this.servicioTipoContribuyente.crearTipoContribuyente(this.tipoContribuyente).subscribe(data=>{
      this.router.navigate(['/home/tipoContribuyente'])
    },error => console.log(error))

  }
  sendQuery(){
    this.crearTipoContribuyente();
  }

}
