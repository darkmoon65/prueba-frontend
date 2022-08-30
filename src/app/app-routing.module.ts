import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarEntidadComponent } from './components/actualizar-entidad/actualizar-entidad.component';
import { ActualizarTipoContribuyenteComponent } from './components/actualizar-tipo-contribuyente/actualizar-tipo-contribuyente.component';
import { ActualizarTipoDocumentoComponent } from './components/actualizar-tipo-documento/actualizar-tipo-documento.component';
import { CrearEntidadComponent } from './components/crear-entidad/crear-entidad.component';
import { CrearTipoContribuyenteComponent } from './components/crear-tipo-contribuyente/crear-tipo-contribuyente.component';
import { CrearTipoDocumentoComponent } from './components/crear-tipo-documento/crear-tipo-documento.component';
import { ListaEntidadComponent } from './components/lista-entidad/lista-entidad.component';
import { ListaTipoContribuyenteComponent } from './components/lista-tipo-contribuyente/lista-tipo-contribuyente.component';
import { ListaTipoDocumentoComponent } from './components/lista-tipo-documento/lista-tipo-documento.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    children:[
      {
        path:'tipoDocumento',
        component:ListaTipoDocumentoComponent
      },
      {
        path:'crearTipoDocumento',
        component:CrearTipoDocumentoComponent
      },
      {
        path:'actualizarTipoDocumento/:id',
        component:ActualizarTipoDocumentoComponent
      },
      {
        path:'tipoContribuyente',
        component:ListaTipoContribuyenteComponent
      },
      {
        path:'crearTipoContribuyente',
        component:CrearTipoContribuyenteComponent
      },
      {
        path:'actualizarTipoContribuyente/:id',
        component:ActualizarTipoContribuyenteComponent
      },
      {
        path:'entidad',
        component:ListaEntidadComponent
      },
      {
        path:'crearEntidad',
        component:CrearEntidadComponent
      },
      {
        path:'actualizarEntidad/:id',
        component:ActualizarEntidadComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
