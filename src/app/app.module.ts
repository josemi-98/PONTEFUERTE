import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MaterialModule } from './Material/material.module';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListadoArticulosComponent } from './componentes/listado-articulos/listado-articulos.component';
import { VistaArticuloComponent } from './componentes/vista-articulo/vista-articulo.component';
import { CestaComponent } from './componentes/cesta/cesta.component';
import { PagoComponent } from './componentes/pago/pago.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoArticulosComponent,
    VistaArticuloComponent,
    CestaComponent,
    PagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
