import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent  {

  isSlideChecked = false;

  tipoPerfil = 'público';

  config = {
    nomeUsuario: '',
    perfilPublico: false,
    acessibilidade: false,
    ultimaAtualizacao: new Date()
  }

  constructor(private configService: ConfigService) {
    let usuarioLogado = localStorage.getItem('usuarioLogado')!;
    this.configService.retornar(usuarioLogado).subscribe(retorno => {
      console.log("config", retorno);
      this.config = retorno;
      if(retorno.perfilPublico) {
        this.tipoPerfil = 'público';
      } else {
        this.tipoPerfil = 'privado';
      }
      this.isSlideChecked = !retorno.perfilPublico;
    }, error => {
      console.log(error);
    })
  }

  toggleChanges($event: MatSlideToggleChange) {
    console.log($event.source.checked);
    this.isSlideChecked = $event.source.checked;
    if(this.isSlideChecked) {
      this.tipoPerfil = 'privado';
      this.config.perfilPublico = false;
      this.configService.atualizar(this.config).subscribe(retorno => {
        console.log(retorno);
      });
    } else {
      this.tipoPerfil = 'público';
      this.config.perfilPublico = true;
      this.configService.atualizar(this.config).subscribe(retorno => {
        console.log(retorno);
      });
    }
    
  }


}
