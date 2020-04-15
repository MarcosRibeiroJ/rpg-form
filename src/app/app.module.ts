import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NovaFichaComponent } from './nova-ficha/nova-ficha.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NovaFichaComponent,
    ConfiguracoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
