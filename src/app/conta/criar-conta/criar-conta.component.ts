import { Component, OnInit } from '@angular/core';
import { ContaService } from '../shared/conta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {
  conta = {
    id: '',
    nome: '',
    email: '',
    senha: ''
  }

  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit = async() => {
    try {
      await this.contaService.cadastrarConta(this.conta);
      alert('usuário cadastrado');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
    }
  }

}
