import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CestaComponent } from './componentes/cesta/cesta.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListadoArticulosComponent } from './componentes/listado-articulos/listado-articulos.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { VistaArticuloComponent } from './componentes/vista-articulo/vista-articulo.component';

const routes: Routes = [
 // { path: '', redirectTo:'/inicio', pathMatch:'full'},
  { path:'', component: InicioComponent},
  { path:'cesta', component: CestaComponent},
  { path: 'pago', component: PagoComponent},
  { path: 'vista-articulo', component: VistaArticuloComponent},
  { path: 'listado-articulo', component: ListadoArticulosComponent},
 // { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
