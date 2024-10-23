import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AutenticacaoComponent } from './layout/autenticacao/autenticacao.component';
import { LoginComponent } from './conta/login/login.component';
import { AutorizacaoGuard } from './conta/shared/autorizacao.guard';
import { CriarContaComponent } from './conta/criar-conta/criar-conta.component';
import { TabelaComponent } from './layout/tabela/tabela.component';
import { ConteudoHomeComponent } from './layout/conteudo-home/conteudo-home.component';
import { TelaNaoAutorizadoComponent } from './layout/tela-nao-autorizado/tela-nao-autorizado.component';

const homeRoutes: Routes = [
  {path: 'home', component: ConteudoHomeComponent, canActivate: [AutorizacaoGuard]},
  {path: 'tabela', component: TabelaComponent, canActivate: [AutorizacaoGuard]}
]

const routes: Routes = [
  {path: '', 
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      ...homeRoutes,
      {path: 'tela-erro', component: TelaNaoAutorizadoComponent}
    ]
  },
  {
    path: '', component: AutenticacaoComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'cadastrar-conta', component: CriarContaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
