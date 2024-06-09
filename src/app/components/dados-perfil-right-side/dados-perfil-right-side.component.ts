import { SolicitacaoAmizadeFoto } from './../../models/solicitacao-amizade-foto';
import { SolicitacaoAmizade } from './../../models/solicitacao-amizade';
import { Anuncio } from './../../models/anuncio';
import { ErrorMessageComponent } from './../error-message/error-message.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, Input } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { Usuario } from 'src/app/models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { PerfilService } from 'src/app/services/perfil.service';
import { SolicitacaoAmizadeService } from 'src/app/services/solicitacao-amizade.service';
import { AmizadeService } from 'src/app/services/amizade.service';
import { Amizade } from 'src/app/models/amizade';
import { VendaService } from 'src/app/services/venda.service';
import { Venda } from 'src/app/models/venda';
import {formatDate} from '@angular/common';
import { map } from 'rxjs';
import { Compra } from 'src/app/models/compra';
import { CompraService } from 'src/app/services/compra.service';
import { Doacao } from 'src/app/models/doacao';
import { DoacaoService } from 'src/app/services/doacao.service';
import { Recebido } from 'src/app/models/recebido';
import { RecebimentoService } from 'src/app/services/recebimento.service';

export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-dados-perfil-right-side',
  templateUrl: './dados-perfil-right-side.component.html',
  styleUrls: ['./dados-perfil-right-side.component.scss']
})
export class DadosPerfilRightSideComponent {

  password = "********";

  formPerfil!: FormGroup;

  errorMessage = '';

  anuncios: Anuncio[] = [];

  solicitacoes: SolicitacaoAmizade[] = [];

  solicitacoesComFoto: SolicitacaoAmizadeFoto[] = [];

  aprovada = false;

  deletada = false;

  @Input() menuItem = '';

  @Input() perfil: Perfil = {
    nomeUsuario: '',
    numeroAnuncios: 0,
    numeroSeguidores: 0,
    numeroSeguindo: 0,
    fotoPerfil: '',
    dataCadastro: new Date()
  };
  @Input() usuario: Usuario = {
    nomeUsuario: '',
    senha: '',
    email: '',
    nomeCompleto: '',
    fotoPerfil: '',
    ultimaAtualizacao: new Date()
  }

  usuarioLogado = '';

  vendas: Venda[] = [];

  compras: Compra[] = [];

  doacoes: Doacao[] = [];

  recebidos: Recebido[] = [];

  recebidosArray: Array<Recebido[]> = [];
  
  doacoesArray: Array<Doacao[]> = [];

  comprasArray: Array<Compra[]> = [];

  vendasArray: Array<Venda[]> = [];


  constructor(private route: ActivatedRoute, private router: Router, private recebimentoService: RecebimentoService, private doacaoService: DoacaoService, private compraService: CompraService, private vendaService: VendaService, private amizadeService: AmizadeService, private solicitacaoAmizadeService: SolicitacaoAmizadeService, private perfilService: PerfilService, private anuncioService: AnuncioService, private usuarioService: UsuarioService, private dialog: MatDialog) {
    this.usuarioLogado = localStorage.getItem('usuarioLogado')!;
    this.anuncioService.retornarAnunciosPorUsuario(this.usuarioLogado).subscribe(retorno => {
      retorno.forEach(anuncio => {
        if(anuncio.disponibilidade){
          this.anuncios.push(anuncio);
        }
      })
    }, error => {
      console.log(error);
    });

    this.formPerfil = new FormGroup({
      nomeCompleto: new FormControl('nomeCompleto'),
      email: new FormControl('email'),
      senha: new FormControl('senha')
    });

    this.usuarioService.retornarPorNomeUsuario(this.usuarioLogado).subscribe(retorno => {
      console.log("retorno usuario", retorno);
      this.usuario = retorno;
    }, error => {
      console.log(error);
    });  

    this.perfilService.retornarPerfil(this.usuarioLogado).subscribe(retorno => {
      this.perfil = retorno;
      console.log("perfil numero de anuncios", this.perfil.numeroAnuncios);
    }, error => {
      console.log(error);
    })

    console.log("menuItem", this.menuItem);

    console.log("usuario logado", this.usuarioLogado);

    this.solicitacaoAmizadeService.retornarSolicitacoesAmizadePorUsuario(this.usuarioLogado).subscribe(retorno => {
      this.solicitacoes = retorno;
      this.filtrarSolicitacoes();
    }, error => {
      console.log(error);
    })

    console.log(this.usuarioLogado);

    this.vendaService.retornarTodasVendasPorUsuario(this.usuarioLogado).subscribe(retorno => {
      console.log("vendas", retorno);
      this.vendas = retorno;
      this.vendas.map(venda => venda.dataHoraVenda = new Date(venda.dataHoraVenda.toString().split(',')[2] + "/" + 
        venda.dataHoraVenda.toString().split(',')[1] + "/" + venda.dataHoraVenda.toString().split(',')[0]));
      this.vendasArray = this.groupArray<Venda>(this.vendas, 5);
    });

    this.compraService.retornarTodasComprasPorUsuario(this.usuarioLogado).subscribe(retorno => {
      console.log("compras", retorno);
      this.compras = retorno;
      this.compras.map(compra => compra.dataHoraCompra = new Date(compra.dataHoraCompra.toString().split(',')[2] + "/" + 
        compra.dataHoraCompra.toString().split(',')[1] + "/" + compra.dataHoraCompra.toString().split(',')[0]));
      this.comprasArray = this.groupArray<Compra>(this.compras, 5);  
    })

    this.doacaoService.retornarTodasDoacoesPorUsuario(this.usuarioLogado).subscribe(retorno => {
      console.log("doações", retorno);
      this.doacoes = retorno;
      this.doacoes.map(doacao => doacao.dataHoraDoacao = new Date(doacao.dataHoraDoacao.toString().split(',')[2] + "/" + 
        doacao.dataHoraDoacao.toString().split(',')[1] + "/" + doacao.dataHoraDoacao.toString().split(',')[0]));
      this.doacoesArray = this.groupArray<Doacao>(this.doacoes, 5);    
    })

    this.recebimentoService.retornarTodosRecebidosPorUsuario(this.usuarioLogado).subscribe((retorno: Recebido[]) => {
      console.log("recebidos", retorno);
      this.recebidos = retorno;
      this.recebidos.map(recebido => recebido.dataHoraRecebimento = new Date(recebido.dataHoraRecebimento.toString().split(',')[2] + "/" + 
        recebido.dataHoraRecebimento.toString().split(',')[1] + "/" + recebido.dataHoraRecebimento.toString().split(',')[0]));
      this.recebidosArray = this.groupArray<Recebido>(this.recebidos, 5);   
    })

  }

  filtrarSolicitacoes() {
    this.solicitacoesComFoto = [];
    setTimeout(() => {  
      this.solicitacoes.forEach(solicitacao => {
        console.log("solicitacao erica", solicitacao);
        if(solicitacao.dataHoraDelecao || solicitacao.dataHoraAprovacao) {
          console.log("Solicitação já aprovada ou deletada.");
        } else {
          console.log("solicitacao", solicitacao);
          this.perfilService.retornarPerfil(solicitacao.solicitanteNomeUsuario).subscribe(retorno => {
            console.log(retorno);
            let solicitacaoAmizadeFoto: SolicitacaoAmizadeFoto = {
              solicitacaoId: solicitacao.solicitacaoId,
              solicitanteNomeUsuario: solicitacao.solicitanteNomeUsuario,
              recebeNomeUsuario: solicitacao.recebeNomeUsuario,
              amizadeAprovada: solicitacao.amizadeAprovada,
              dataHoraSolicitacao: solicitacao.dataHoraSolicitacao,
              dataHoraAprovacao: solicitacao.dataHoraAprovacao,
              dataHoraDelecao: solicitacao.dataHoraAprovacao,
              fotoPerfil: retorno.fotoPerfil
            }
            console.log("solicitacao com foto", solicitacaoAmizadeFoto);
            
            this.solicitacoesComFoto.push(solicitacaoAmizadeFoto);
          })
        }
      });
    }, 5000);

  }

  salvarCadastro() {
    if(this.formPerfil.valid) {
      console.log(this.usuario);
      this.usuarioService.atualizarCadastro(this.usuario).subscribe(retorno => {
        console.log("cadastro usuario", retorno);
        this.usuario = retorno;
        this.menuItem = 'dados-pessoais';
      }, error => {
        console.log(error);
      });
    } else {
      let errors = this.formPerfil.controls['senha'].errors;
      console.log(errors);
      if(errors) {
        console.log(errors);
        let minlength = errors['minlength'];
        this.errorMessage = "A quantidade mínima de caracteres requerida para a senha é " + minlength['requiredLength'];
        this.dialog.open(ErrorMessageComponent, {
          height: '130px',
          width: '512px',
          data: { message: this.errorMessage },
          position: { left: '512px', right: '100px'},
        });
      }
    }
  }

  visualizar(anuncio: any) {
    this.router.navigate(['/visualizar-anuncio/' + anuncio.id]);
  }

  aprovarAmizade(solicitacaoComFoto: SolicitacaoAmizadeFoto) {
    let solicitacaoAmizade: SolicitacaoAmizade = {
      solicitacaoId: solicitacaoComFoto.solicitacaoId,
      solicitanteNomeUsuario: solicitacaoComFoto.solicitanteNomeUsuario,
      recebeNomeUsuario: solicitacaoComFoto.recebeNomeUsuario,
      amizadeAprovada: true,
      dataHoraSolicitacao: solicitacaoComFoto.dataHoraSolicitacao,
      dataHoraAprovacao: new Date(),
      dataHoraDelecao: undefined
    }

    this.solicitacaoAmizadeService.aprovarSolicitacaoAmizade(solicitacaoAmizade).subscribe(retorno =>{
      this.aprovada = true;
    }, error => {
      console.log(error);
    });


    let amizade: Amizade = {
      seguidorNomeUsuario: solicitacaoComFoto.solicitanteNomeUsuario,
      seguidoNomeUsuario: solicitacaoComFoto.recebeNomeUsuario,
      dataHoraInicio: new Date(),
      dataHoraFim: undefined,
      amigos: true
    }

    this.amizadeService.salvarAmizade(amizade).subscribe(retorno => {
      console.log("amizade salva");
    }, error => {
      console.log(error);
    })

    this.perfil.numeroSeguidores++;

    this.perfilService.atualizarPerfil(this.perfil).subscribe(retorno => {

    }, error => {
      console.log(error);
    })

    setTimeout(() => {
      this.retornarSolicitacoes(this.usuarioLogado);
    }, 5000);

  }

  retornarSolicitacoes(usuarioLogado: string) {
    this.solicitacaoAmizadeService.retornarSolicitacoesAmizadePorUsuario(usuarioLogado).subscribe(retorno => {
      this.solicitacoes = retorno;
      this.filtrarSolicitacoes();
    }, error => {
      console.log(error);
    })
  
  }

  deletarAmizade(solicitacaoComFoto: SolicitacaoAmizadeFoto) {
    
    this.solicitacaoAmizadeService.deletarSolicitacaoAmizade(solicitacaoComFoto.solicitanteNomeUsuario, solicitacaoComFoto.recebeNomeUsuario).subscribe(retorno =>{
      this.deletada = true;
    }, error => {
      console.log(error);
    });

    this.solicitacaoAmizadeService.retornarSolicitacoesAmizadePorUsuario(this.usuarioLogado).subscribe(retorno => {
      this.solicitacoes = retorno;
      this.filtrarSolicitacoes();
    }, error => {
      console.log(error);
    })

    setTimeout(() => {
      this.retornarSolicitacoes(this.usuarioLogado);
    }, 5000);
  }

  groupArray<T>(data: Array<T>, n: number): Array<T[]> {
    let group = new Array<T[]>();
​
    for (let i = 0, j = 0; i < data.length; i++) {
        if (i >= n && i % n === 0)
            j++;
        group[j] = group[j] || [];
        group[j].push(data[i])
    }
​
    return group;
  }

}
