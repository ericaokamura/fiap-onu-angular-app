import { CarrinhoService } from 'src/app/services/carrinho.service';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { Component, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login = {
    nomeUsuario: '',
    senha: ''
  };

  constructor(private router: Router, @Inject(Injector) private injector: Injector, private autenticacaoService: AutenticacaoService, private carrinhoService: CarrinhoService) {
    this.autenticacaoService = this.injector.get(AutenticacaoService);
    this.carrinhoService = this.injector.get(CarrinhoService);
  }

  logar() {
    this.autenticacaoService.login(this.login).subscribe(retorno => {
      console.log(retorno);
      localStorage.setItem("token", retorno.token);
      console.log("nome usuario: ", this.login.nomeUsuario);
      localStorage.setItem("usuarioLogado", this.login.nomeUsuario);
      this.carrinhoService.retornarCarrinhoDeUsuario(this.login.nomeUsuario).subscribe(retorno => {
        console.log('carrinhoId', retorno.carrinhoId);
        localStorage.setItem("carrinhoId", retorno.carrinhoId);
      }, error => {
        console.log(error);
      });
      this.router.navigate(['/compra']);
    }, error => {
      console.log(error);
    });
  }
}

