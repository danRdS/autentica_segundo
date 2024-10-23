import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { ContaService } from './conta.service';

@Injectable({
  providedIn: 'root'
})

export class AutorizacaoGuard implements CanActivate {
  static canActivatePerfil: any;
  constructor(private contaService: ContaService, private router: Router){ }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise <boolean> {
        try {
          const tokenValido = await this.contaService.verificarValidadeToken().toPromise();
          if(tokenValido) {
            const perfil = await this.contaService.obterPerfil().toPromise();
  
            if(perfil?.hasOwnProperty('perfil') && route.routeConfig?.path === 'tabela') {
              return true;
            } else if (route.routeConfig?.path === 'home') {
              return true;
            } else {
              this.router.navigate(['/tela-erro']);
              return false;
            }
          }
          return true;
        } catch (error: any) {
          alert('Sessão encerrada. Você será deslogado');
          this.router.navigate(['/login']);
          return false;
        }
    }
  
}
