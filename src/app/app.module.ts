import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './conta/login/login.component';
import { CriarContaComponent } from './conta/criar-conta/criar-conta.component';
import { HomeComponent } from './layout/home/home.component';
import { AutenticacaoComponent } from './layout/autenticacao/autenticacao.component';
import { TabelaComponent } from './layout/tabela/tabela.component';
import { ConteudoHomeComponent } from './layout/conteudo-home/conteudo-home.component';
import { TelaNaoAutorizadoComponent } from './layout/tela-nao-autorizado/tela-nao-autorizado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CriarContaComponent,
    HomeComponent,
    AutenticacaoComponent,
    TabelaComponent,
    ConteudoHomeComponent,
    TelaNaoAutorizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
