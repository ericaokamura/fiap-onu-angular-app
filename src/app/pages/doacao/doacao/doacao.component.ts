import { Component, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Anuncio } from 'src/app/models/anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.scss']
})
export class DoacaoComponent {

  usuarioLogado = '';

  anuncio: Anuncio = {
    id: '',
    nomeUsuario: '',
    titulo: '',
    descricao: '',
    preco: '',
    fotoAnuncio: '',
    tipoAnuncio: 'Doação',
    disponibilidade: true,
    dataHoraPublicacao: new Date()
  };

  constructor(@Inject(Injector) private injector: Injector, private router: Router, private usuarioService: UsuarioService, private anuncioService: AnuncioService) {
    this.anuncioService = this.injector.get(AnuncioService);
    this.usuarioService = this.injector.get(UsuarioService);
    this.usuarioLogado = localStorage.getItem('usuarioLogado')!;
  }

  publicar() {
    console.log(this.usuarioLogado);
    this.anuncio.nomeUsuario = this.usuarioLogado;
    this.anuncio.tipoAnuncio = 'Doação';
    this.anuncioService.salvar(this.anuncio).subscribe(retorno => {
      console.log("anuncio", retorno);
      this.router.navigate(['/visualizar-anuncio/' + retorno.id]);
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

