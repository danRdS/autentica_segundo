import { Component, OnInit } from '@angular/core';
import { Carros } from './Carros';
import { ContaService } from 'src/app/conta/shared/conta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  carros: Carros[] = [
    {id: 1, modelo: 'Civic', marca: 'Honda', ano: 2022},
    {id: 2, modelo: 'Corolla', marca: 'Toyota', ano: 2022},
    {id: 3, modelo: 'Mustang', marca: 'Ford', ano: 1967},
    {id: 4, modelo: 'Charger', marca: 'Dodge', ano: 1968},
  ];

  dadosPerfil: any = '';
  erro: string = '';

  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
    this.contaService.obterPerfil().subscribe(
      (dado: any) => {
        // this.dadosPerfil = dado;
        this.dadosPerfil = dado.perfil;
      },
      (erro: any) => {
        this.erro = erro.error.error;
        console.log('Erro:', this.erro);

        // if(this.erro == 'Sessão expirada. Acesse novamente!') {
        //   alert(this.erro);
        //   this.contaService.excluirToken();
        //   this.router.navigate(['/login']);
        // }

      }
    );
  }

}
