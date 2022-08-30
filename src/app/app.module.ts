import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTipoDocumentoComponent } from './components/lista-tipo-documento/lista-tipo-documento.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListaTipoContribuyenteComponent } from './components/lista-tipo-contribuyente/lista-tipo-contribuyente.component';
import { ListaEntidadComponent } from './components/lista-entidad/lista-entidad.component';
import { CrearTipoDocumentoComponent } from './components/crear-tipo-documento/crear-tipo-documento.component';
import { CrearTipoContribuyenteComponent } from './components/crear-tipo-contribuyente/crear-tipo-contribuyente.component';
import { CrearEntidadComponent } from './components/crear-entidad/crear-entidad.component';
import { FormsModule } from '@angular/forms';
import { ActualizarTipoDocumentoComponent } from './components/actualizar-tipo-documento/actualizar-tipo-documento.component';
import { ActualizarTipoContribuyenteComponent } from './components/actualizar-tipo-contribuyente/actualizar-tipo-contribuyente.component';
import { ActualizarEntidadComponent } from './components/actualizar-entidad/actualizar-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTipoDocumentoComponent,
    ListaTipoContribuyenteComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    ListaEntidadComponent,
    CrearTipoDocumentoComponent,
    CrearTipoContribuyenteComponent,
    CrearEntidadComponent,
    ActualizarTipoDocumentoComponent,
    ActualizarTipoContribuyenteComponent,
    ActualizarEntidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
