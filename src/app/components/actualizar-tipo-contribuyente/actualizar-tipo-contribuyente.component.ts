import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoContribuyente } from 'src/app/class/tipo-contribuyente';
import { TipoContribuyenteService } from 'src/app/services/tipo-contribuyente.service';

@Component({
  selector: 'app-actualizar-tipo-contribuyente',
  templateUrl: './actualizar-tipo-contribuyente.component.html',
  styleUrls: ['./actualizar-tipo-contribuyente.component.css']
})
export class ActualizarTipoContribuyenteComponent implements OnInit {

  id: number;
  tipoContribuyente: TipoContribuyente;
  constructor(private route: ActivatedRoute,private router:Router, private servicioTipoContribuyente: TipoContribuyenteService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.tipoContribuyente = new TipoContribuyente();
    this.servicioTipoContribuyente.getTipoContribuyenteById(this.id).subscribe(data=>{
      this.tipoContribuyente = data;
    })
  }

  sendQuery(){
    this.servicioTipoContribuyente.actualizarTipoContribuyente(this.id, this.tipoContribuyente).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/home/tipoContribuyente'])
    },error => console.log(error))
  }

}
