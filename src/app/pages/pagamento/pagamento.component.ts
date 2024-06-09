import { AnuncioService } from 'src/app/services/anuncio.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from 'src/app/models/compra';
import { Perfil } from 'src/app/models/perfil';
import { Produto } from 'src/app/models/produto';
import { Usuario } from 'src/app/models/usuario';
import { Venda } from 'src/app/models/venda';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { CompraService } from 'src/app/services/compra.service';
import { PerfilService } from 'src/app/services/perfil.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VendaService } from 'src/app/services/venda.service';
import { Anuncio } from 'src/app/models/anuncio';
import { map } from 'rxjs';
import { Doacao } from 'src/app/models/doacao';
import { DoacaoService } from 'src/app/services/doacao.service';
import { RecebimentoService } from 'src/app/services/recebimento.service';
import { Recebido } from 'src/app/models/recebido';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent {

  sucesso = false;

  produtos: Produto[] = []

  usuario: Usuario = {
    nomeUsuario: '',
    senha: '',
    email: '',
    nomeCompleto: '',
    fotoPerfil: '',
    ultimaAtualizacao: new Date()
  }

  perfil: Perfil = {
    nomeUsuario: '',
    numeroAnuncios: 0,
    numeroSeguidores: 0,
    numeroSeguindo: 0,
    fotoPerfil: '',
    dataCadastro: new Date()
  }

  nomeUsuario = '';

  constructor(private route: ActivatedRoute, private router: Router, private doacaoService: DoacaoService, private recebimentoService: RecebimentoService, private anuncioService: AnuncioService, private perfilService: PerfilService, private usuarioService: UsuarioService, private carrinhoService: CarrinhoService, private produtoService: ProdutoService, private vendaService: VendaService, private compraService: CompraService) {

  }

  concluirPagamento() {

    this.nomeUsuario = localStorage.getItem('usuarioLogado')!;

    let carrinhoId = localStorage.getItem('carrinhoId')!;

    this.carrinhoService.retornarPorId(carrinhoId).subscribe(retorno => {
      console.log(retorno);
    });

    this.produtoService.retornarProdutosEmCarrinhoDeUsuario(parseInt(carrinhoId)).subscribe(retorno => {
      
      this.produtos = retorno;

      this.produtos.forEach(produto => {

        console.log("produto", produto);
  
        this.anuncioService.retornarAnuncioPorId(produto.anuncioId).subscribe(retorno => {

          let anuncio: Anuncio = {
            id: retorno.id,
            nomeUsuario: retorno.nomeUsuario,
            titulo: retorno.titulo,
            descricao: retorno.descricao,
            preco: retorno.preco,
            fotoAnuncio: retorno.fotoAnuncio,
            tipoAnuncio: retorno.tipoAnuncio,
            disponibilidade: false,
            dataHoraPublicacao: retorno.dataHoraPublicacao
          };

          console.log("anuncio", anuncio);
  
          this.anuncioService.atualizarAnuncio(anuncio).subscribe(retorno => {
            console.log("retorno anuncio", retorno);
          }, error => {
            console.log(error);
          })
  
          console.log("anuncio", anuncio);

          if(anuncio.tipoAnuncio === 'Venda') {
    
            let compra: Compra = {
              titulo: produto.titulo,
              descricao: produto.descricao,
              nomeUsuario: this.nomeUsuario,
              anuncioId: produto.anuncioId,
              preco: produto.preco,
              dataHoraCompra: new Date()
            }
      
            this.compraService.comprar(compra).subscribe(retorno => {
              console.log("Compra efetuada!");

              let venda: Venda = {
                titulo: produto.titulo,
                descricao: produto.descricao,
                nomeUsuario: anuncio.nomeUsuario,
                anuncioId: produto.anuncioId,
                preco: produto.preco,
                dataHoraVenda: new Date()
              }
        
              this.vendaService.salvar(venda).subscribe(retorno => {
                console.log("Venda efetuada!", retorno);
              }, error => {
                console.log(error);
              });
        
            }, error => {
              console.log(error);
            });
      
            
          } else if(anuncio.tipoAnuncio === 'Doação') {

              let doacao: Doacao = {
                titulo: produto.titulo,
                descricao: produto.descricao,
                nomeUsuario: this.nomeUsuario,
                anuncioId: produto.anuncioId,
                dataHoraDoacao: new Date()
              }
        
              this.doacaoService.doar(doacao).subscribe(retorno => {
                console.log("Doação realizada!");
              }, error => {
                console.log(error);
              });
          
              let recebido: Recebido = {
                titulo: produto.titulo,
                descricao: produto.descricao,
                nomeUsuario: anuncio.nomeUsuario,
                anuncioId: produto.anuncioId,
                dataHoraRecebimento: new Date()
              }

              this.recebimentoService.receber(recebido).subscribe(retorno => {
                console.log("Recebimento realizado!", retorno);
              }, error => {
                console.log(error);
              });
          }
          console.log(this.produtos);
        })
      }, (error: any) => {
        console.log(error);
      })
    }, (error: any) => {
      console.log(error);
    });
  
    
    this.perfilService.retornarPerfil(this.nomeUsuario).pipe(
      map((response: any) => {
        this.perfil = response
        this.perfil.numeroAnuncios = this.perfil.numeroAnuncios - 1;

        this.perfilService.atualizarPerfil(this.perfil).subscribe(retorno => {
          console.log("Perfil atualizado.", retorno);
        });
      })
    );

    this.produtoService.esvaziarCarrinhoDeUsuario(carrinhoId).subscribe(() => {
      console.log("Carrinho esvaziado.");
    }, error => {
      console.log(error);
    });
    this.sucesso = true;
  }

}
