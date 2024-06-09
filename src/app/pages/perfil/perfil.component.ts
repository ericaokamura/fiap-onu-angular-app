import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PerfilService } from 'src/app/services/perfil.service';
import { Anuncio } from 'src/app/models/anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { AmizadeService } from 'src/app/services/amizade.service';
import { Amizade } from 'src/app/models/amizade';
import { ConfigService } from 'src/app/services/config.service';
import { SolicitacaoAmizade } from 'src/app/models/solicitacao-amizade';
import { SolicitacaoAmizadeService } from 'src/app/services/solicitacao-amizade.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  usuario: Usuario = {
    nomeUsuario: '',
    senha: '',
    email: '',
    nomeCompleto: '',
    fotoPerfil: '',
    ultimaAtualizacao: new Date()
  }

  perfilSeguido: Perfil = {
    nomeUsuario: '',
    numeroAnuncios: 0,
    numeroSeguidores: 0,
    numeroSeguindo: 0,
    fotoPerfil: '',
    dataCadastro: new Date()
  }

  perfilSeguidor: Perfil = {
    nomeUsuario: '',
    numeroAnuncios: 0,
    numeroSeguidores: 0,
    numeroSeguindo: 0,
    fotoPerfil: '',
    dataCadastro: new Date()
  }

  amizade: Amizade = {
    seguidorNomeUsuario: '',
    seguidoNomeUsuario: '',
    dataHoraInicio: undefined,
    dataHoraFim: undefined,
    amigos: false
  }

  solicitacaoAmizade: SolicitacaoAmizade = {
    solicitacaoId: 0,
    solicitanteNomeUsuario: '',
    recebeNomeUsuario: '',
    amizadeAprovada: false,
    dataHoraSolicitacao: new Date(),
    dataHoraAprovacao: new Date(),
    dataHoraDelecao: new Date()
  }

  nomeUsuarioPerfil = '';

  usuarioLogado = '';

  status = 'seguir';

  anuncios: Anuncio[] = [];

  perfilPublicoSeguido = false;

  amigos = false;

  solicitacoes: SolicitacaoAmizade[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private solicitacaoAmizadeService: SolicitacaoAmizadeService, private configService: ConfigService, private amizadeService: AmizadeService, private anuncioService: AnuncioService, private usuarioService: UsuarioService, private perfilService: PerfilService) {
    
    this.nomeUsuarioPerfil = this.route.snapshot.params['nomeUsuario'];
    this.usuarioLogado = localStorage.getItem('usuarioLogado')!;

    console.log("usuarioLogado", this.usuarioLogado);

    console.log(this.nomeUsuarioPerfil);

    this.configService.retornar(this.nomeUsuarioPerfil).subscribe(retorno => {
      console.log("config", retorno);
      this.perfilPublicoSeguido = retorno.perfilPublico;
    }, error => {
      console.log(error);
    })

    this.perfilService.retornarPerfil(this.nomeUsuarioPerfil).subscribe(retorno => {
      this.perfilSeguido = retorno;
      console.log(retorno);
    }, error => {
      console.log(error);
    });

    this.perfilService.retornarPerfil(this.usuarioLogado).subscribe(retorno => {
      this.perfilSeguidor = retorno;
      console.log(retorno);
    }, error => {
      console.log(error);
    });

    this.usuarioService.retornarPorNomeUsuario(this.nomeUsuarioPerfil).subscribe(usuario => {
      this.usuario = usuario;
      console.log("usuario", this.usuario);
    }, error => {
      console.log(error);
    });

    console.log(this.nomeUsuarioPerfil);
    
    this.anuncioService.retornarAnunciosPorUsuario(this.nomeUsuarioPerfil).subscribe(anuncios => {
      this.anuncios = anuncios;
    }, error => {
      console.log(error);
    });

    setTimeout(() => {
      this.solicitacaoAmizadeService.retornarSolicitacaoAmizade(this.usuarioLogado, this.nomeUsuarioPerfil).subscribe(retorno => {
        this.solicitacaoAmizade = retorno;
        console.log("solicitacao amizade", retorno);
        if(retorno) {
          if(retorno.amizadeAprovada) {
            this.status = 'seguindo';
            this.amigos = true;
          } else {
            if(retorno.dataHoraDelecao == undefined || retorno.dataHoraDelecao === null) {
              this.status = 'aguardandoAprovacao';
            } else {
              this.status = 'seguir';
            }
          }
        }
        
      }, error => {
        console.log("solicitacao de amizade nao encontrada");
        console.log("solicitacao amizade", this.solicitacaoAmizade);
      });

    }, 5000);

    console.log(this.anuncios);
    console.log("amigos?", this.amigos);
    console.log("status", this.status);

  }
  
  visualizar(anuncio: any) {
    this.router.navigate(['/visualizar-anuncio/' + anuncio.id]);
  }

  seguir() {

    if(this.usuarioLogado !== this.nomeUsuarioPerfil) {

      if(this.perfilPublicoSeguido) {
        let amizade: Amizade = {
          seguidorNomeUsuario: this.usuarioLogado,
          seguidoNomeUsuario: this.nomeUsuarioPerfil,
          dataHoraInicio: new Date(),
          dataHoraFim: undefined,
          amigos: true
        }
  
        this.amizadeService.salvarAmizade(amizade).subscribe(retorno => {
          console.log(retorno);
          this.perfilService.retornarPerfil(this.nomeUsuarioPerfil).subscribe(retorno => {
            console.log("Perfil seguido", retorno);
            this.perfilSeguido = retorno;
          }, error => {
            console.log(error);
          });
        }, error => {
          console.log(error);
        });

        this.perfilSeguidor.numeroSeguindo++;
        this.perfilService.atualizarPerfil(this.perfilSeguidor).subscribe(retorno => {
          console.log("Perfil seguidor atualizado.", retorno);
        }, error =>{
          console.log(error);
        })

        this.perfilSeguido.numeroSeguidores++;
        this.perfilService.atualizarPerfil(this.perfilSeguido).subscribe(retorno => {
          console.log("Perfil seguidor atualizado.", retorno);
        }, error =>{
          console.log(error);
        })
  
        this.status = 'seguindo';

        this.amigos = true;
    
      } else  {

        this.solicitacaoAmizadeService.retornarSolicitacaoAmizade(this.usuarioLogado, this.nomeUsuarioPerfil).subscribe(retorno => {
          
          this.solicitacaoAmizade = retorno;

          if(this.solicitacaoAmizade) {
  
            console.log("SolicitacaoAmizade", this.solicitacaoAmizade);
            this.solicitacaoAmizade.amizadeAprovada = false;
            this.solicitacaoAmizade.dataHoraSolicitacao = new Date();
            this.solicitacaoAmizade.dataHoraAprovacao = undefined;
            this.solicitacaoAmizade.dataHoraDelecao = undefined;
  
            this.solicitacaoAmizadeService.atualizarSolicitacaoAmizade(this.solicitacaoAmizade).subscribe(retorno => {
              console.log("salvarSolicitacaoAmizade", retorno);
              this.status = 'aguardandoAprovacao';
            }, error => {
              console.log(error);
            })
          }
        }, error => {

          this.solicitacaoAmizade.recebeNomeUsuario = this.nomeUsuarioPerfil;
          this.solicitacaoAmizade.solicitanteNomeUsuario = this.usuarioLogado;
          this.solicitacaoAmizade.amizadeAprovada = false;
          this.solicitacaoAmizade.dataHoraSolicitacao = new Date();
          this.solicitacaoAmizade.dataHoraAprovacao = undefined;
          this.solicitacaoAmizade.dataHoraDelecao = undefined;

          this.solicitacaoAmizadeService.salvarSolicitacaoAmizade(this.solicitacaoAmizade).subscribe(retorno => {
            console.log("salvarSolicitacaoAmizade", retorno);
            this.status = 'aguardandoAprovacao';
          }, error => {
            console.log(error);
          })
        });
      }

    } else {

    }
  }

  unfollow(status: string) {

    if(this.usuarioLogado !== this.nomeUsuarioPerfil) {

      if(this.perfilPublicoSeguido) {

        let amizade: Amizade = {
          seguidorNomeUsuario: this.usuarioLogado,
          seguidoNomeUsuario: this.nomeUsuarioPerfil,
          dataHoraInicio: undefined,
          dataHoraFim: new Date(),
          amigos: false
        }

        this.amizadeService.removerAmizade(amizade).subscribe(retorno => {
          console.log(retorno);
          this.perfilService.retornarPerfil(this.nomeUsuarioPerfil).subscribe(retorno => {
            console.log("Perfil seguido", retorno);
            this.perfilSeguido = retorno;
          }, error => {
            console.log(error);
          });
        }, error => {
          console.log(error);
        });

        this.status = 'seguir';

      } else  {

        if(status === 'aguardandoAprovacao') {

          this.solicitacaoAmizadeService.retornarSolicitacaoAmizade(this.usuarioLogado, this.nomeUsuarioPerfil).subscribe(retorno => {
            this.solicitacaoAmizade = retorno;
          });

          console.log("solicitacao amizade", this.solicitacaoAmizade);

          this.solicitacaoAmizade.amizadeAprovada = false;
          this.solicitacaoAmizade.dataHoraAprovacao = undefined;
          this.solicitacaoAmizade.dataHoraDelecao = new Date();

          this.solicitacaoAmizadeService.atualizarSolicitacaoAmizade(this.solicitacaoAmizade).subscribe(retorno => {
            this.solicitacaoAmizade = retorno;
          });

          console.log("solicitacao amizade", this.solicitacaoAmizade);

          this.status = 'seguir';

        } else if(status === 'seguindo') {

          this.status = 'seguir';

          let amizade: Amizade = {
            seguidorNomeUsuario: this.usuarioLogado,
            seguidoNomeUsuario: this.nomeUsuarioPerfil,
            dataHoraInicio: undefined,
            dataHoraFim: new Date(),
            amigos: false
          }

          this.amizadeService.removerAmizade(amizade).subscribe(retorno => {
            console.log(retorno);
            this.perfilService.retornarPerfil(this.nomeUsuarioPerfil).subscribe(retorno => {
              console.log("Perfil seguido", retorno);
              this.perfilSeguido = retorno;
            }, error => {
              console.log(error);
            });
          }, error => {
            console.log(error);
          });

          this.solicitacaoAmizade.amizadeAprovada = false;
          this.solicitacaoAmizade.dataHoraAprovacao = undefined;
          this.solicitacaoAmizade.dataHoraDelecao = new Date();

          this.solicitacaoAmizadeService.atualizarSolicitacaoAmizade(this.solicitacaoAmizade).subscribe(retorno => {
            this.solicitacaoAmizade = retorno;

            console.log(retorno);
          });

          this.perfilSeguidor.numeroSeguindo--;
          this.perfilService.atualizarPerfil(this.perfilSeguidor).subscribe(retorno => {
            console.log("Perfil seguidor atualizado.", retorno);
          }, error =>{
            console.log(error);
          })
  
          this.perfilSeguido.numeroSeguidores--;
          this.perfilService.atualizarPerfil(this.perfilSeguido).subscribe(retorno => {
            console.log("Perfil seguidor atualizado.", retorno);
          }, error =>{
            console.log(error);
          })

        }
        
      }
    } else  {

    }
  }

}
