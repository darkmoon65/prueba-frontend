import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoContribuyente } from '../../class/tipo-contribuyente';
import { TipoContribuyenteService } from '../../services/tipo-contribuyente.service';

@Component({
  selector: 'app-lista-tipo-contribuyente',
  templateUrl: './lista-tipo-contribuyente.component.html',
  styleUrls: ['./lista-tipo-contribuyente.component.css']
})
export class ListaTipoContribuyenteComponent implements OnInit {

  listaTipoContribuyente: TipoContribuyente[];

  constructor( private servicioTipoContribuyente: TipoContribuyenteService , private router: Router) { }

  ngOnInit() {
    this.getListaTipoContribuyente();
  }
  private getListaTipoContribuyente(){
    this.servicioTipoContribuyente.getListaTipoContribuyente().subscribe(data => {
      this.listaTipoContribuyente = data;  
      console.log(data);
      }  
    )
  }
  actualizarTipoContribuyente(id:number){
    this.router.navigate(['/home/actualizarTipoContribuyente', id])
  }
  eliminarTipoContribuyente(id:number){
    console.log(id)
    this.servicioTipoContribuyente.eliminarTipoContribuyente(id).subscribe(data=>{
      this.getListaTipoContribuyente();
    })
  }
}
