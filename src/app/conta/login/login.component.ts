import { Component, OnInit } from '@angular/core';
import { ContaService } from '../shared/conta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    senha: ''
  }

  constructor(
    private contaService: ContaService,
    private router: Router
    ) { 
      this.contaService.excluirToken();
    }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      await this.contaService.verificarLogin(this.login);
      this.router.navigate(['']);
    } catch (error: any) {
      alert(error.error);
    }
  }

}
