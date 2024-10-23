import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  // essa porta é a do server.js
  urlMinhaApi = 'http://localhost:3200';

  constructor(private http: HttpClient) { }

  async verificarLogin( user: { email: string, senha: string } ) {
    try {
      const resultado: any = await this.http.post(`${this.urlMinhaApi}/login`, user).toPromise();
      this.armazenarToken(resultado.token);
    } catch (error: any) {
      throw error.error;
    }
  }
 
  verificarValidadeToken() {
    const token = this.obterToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get( `${this.urlMinhaApi}/verificar-token`, {headers} );
  }
  
  obterPerfil() {
    const token = this.obterToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get( `${this.urlMinhaApi}/perfis`, {headers} );
  }

  async cadastrarConta(conta: any) {
    return await this.http.post(`${this.urlMinhaApi}/users`, conta).toPromise();
  }

  armazenarToken(token: string) {
    localStorage.setItem('token', token);
  }

  obterToken() {
    return localStorage.getItem('token');
  }

  excluirToken() {
    return localStorage.removeItem('token');
  }

  estaLogado() {
    const token = this.obterToken();
    return !!token;
  }

}