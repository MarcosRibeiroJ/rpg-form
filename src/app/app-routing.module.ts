import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NovaFichaComponent } from './nova-ficha/nova-ficha.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'novaFicha', component: NovaFichaComponent },
  { path:'configuracoes', component: ConfiguracoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
