import { Component, Inject, Injector } from '@angular/core';
import { map } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  sucesso: boolean = false;

  usuario: Usuario = {
    nomeUsuario: '',
    senha: '',
    email: '',
    nomeCompleto: '',
    fotoPerfil: '',
    ultimaAtualizacao: new Date()
  }

  constructor(@Inject(Injector) private injector: Injector, private usuarioService: UsuarioService) {
    this.sucesso = false;
    this.usuarioService = this.injector.get(UsuarioService);
  }

  cadastrar() {
    console.log(this.usuario);
    this.usuarioService.cadastrar(this.usuario).subscribe((retorno: any) => {
        console.log(retorno);
        this.sucesso = true;
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
      this.usuario.fotoPerfil = base64String;
      console.log(result);
      this.usuario.fotoPerfil = base64String;
    };
  
  }
}
