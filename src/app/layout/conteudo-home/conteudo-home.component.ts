import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/conta/shared/conta.service';

@Component({
  selector: 'app-conteudo-home',
  templateUrl: './conteudo-home.component.html',
  styleUrls: ['./conteudo-home.component.css']
})
export class ConteudoHomeComponent implements OnInit {
  
  dadosPerfil: any = '';
  erro: string = '';

  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
    // this.contaService.obterPerfil().subscribe(
    //   (dado: any) => {
    //     this.dadosPerfil = dado;
    //   },
    //   (erro: any) => {
    //     this.erro = erro.error.error;

    //     if(this.erro == 'Sessão expirada. Acesse novamente!') {
    //       alert(this.erro);
    //       this.contaService.excluirToken();
    //       this.router.navigate(['/login']);
    //     }
    //   }
    // );
  }

  sair() {
    alert('Sessão encerrada');
    this.router.navigate(['/login']);
  }


}
