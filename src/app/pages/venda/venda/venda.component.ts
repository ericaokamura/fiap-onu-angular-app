import { Component, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Anuncio } from 'src/app/models/anuncio';
import { Usuario } from 'src/app/models/usuario';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent {

  usuarioLogado = '';

  anuncio: Anuncio = {
    id: '',
    nomeUsuario: '',
    titulo: '',
    descricao: '',
    preco: '',
    fotoAnuncio: '',
    tipoAnuncio: 'Venda',
    disponibilidade: true,
    dataHoraPublicacao: new Date()
  };

  constructor(private router: Router, @Inject(Injector) private injector: Injector, private usuarioService: UsuarioService, private anuncioService: AnuncioService) {
    this.anuncioService = this.injector.get(AnuncioService);
    this.usuarioService = this.injector.get(UsuarioService);
    this.usuarioLogado = localStorage.getItem('usuarioLogado')!;
  }

  publicar() {
      console.log(this.usuarioLogado);
      this.anuncio.nomeUsuario = this.usuarioLogado;
      this.anuncio.tipoAnuncio = 'Venda';
      this.anuncio.disponibilidade = true;
      this.anuncio.dataHoraPublicacao = new Date();
      console.log(this.anuncio);
      this.anuncioService.salvar(this.anuncio).subscribe(retorno => {
        console.log(retorno);
        this.router.navigate(['/visualizar-anuncio/' + retorno.id]);
      }, error => {
        console.log(error);
      });
  }

  saveFile(target: any) {
    let file: File = target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    let result: ArrayBuffer;
    reader.onload = () => {
      result = reader.result as ArrayBuffer;
      const base64String = btoa(String.fromCharCode(...new Uint8Array(result)));
      this.anuncio.fotoAnuncio = base64String;
      console.log(result);
    };
  }
}
