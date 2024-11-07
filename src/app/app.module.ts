import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import { FavoritosComponent } from './Componentes/favoritos/favoritos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerfilComponent,
    FavoritosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
