import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { Usuario } from 'src/app/models/usuario';
import { PerfilService } from 'src/app/services/perfil.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dados-perfil',
  templateUrl: './dados-perfil.component.html',
  styleUrls: ['./dados-perfil.component.scss']
})
export class DadosPerfilComponent {

  menuItem = 'meu-perfil';
  perfil: Perfil = {
    nomeUsuario: '',
    numeroAnuncios: 0,
    numeroSeguidores: 0,
    numeroSeguindo: 0,
    fotoPerfil: '',
    dataCadastro: new Date()
  };
  usuario: Usuario = {
    nomeUsuario: '',
    senha: '',
    email: '',
    nomeCompleto: '',
    fotoPerfil: '',
    ultimaAtualizacao: new Date()
  }

  constructor(private router: Router, private perfilService: PerfilService, private usuarioService: UsuarioService) {
    let usuarioLogado = localStorage.getItem('usuarioLogado')!;
    this.perfilService.retornarPerfil(usuarioLogado).subscribe(retorno => {
      this.perfil = retorno;
    });
    this.usuarioService.retornarPorNomeUsuario(usuarioLogado).subscribe(retorno => {
      this.usuario = retorno;
      
    });
    console.log(this.perfil);
    console.log(this.usuario);
  }

  goTo(menuItem: string) {
    this.menuItem = menuItem;
  }

  endSession() {
    localStorage.setItem('token', '');
    localStorage.setItem('usuarioLogado', '');
    this.router.navigate(['/login']);
  }

}
