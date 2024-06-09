import { Usuario } from 'src/app/models/usuario';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-visualizar-anuncio',
  templateUrl: './visualizar-anuncio.component.html',
  styleUrls: ['./visualizar-anuncio.component.scss']
})
export class VisualizarAnuncioComponent {

  @Input() id = "";
  @Input() fotoPerfil = "";
  @Input() fotoAnuncio = "";
  @Input() titulo = "";
  @Input() descricao = "";
  @Input() preco = "";

  carrinhoId = '';
  anuncioId = '';
  usuarioAnuncio: Usuario = {
    nomeUsuario: '',
    senha: '',
    email: '',
    nomeCompleto: '',
    fotoPerfil: '',
    ultimaAtualizacao: new Date()
  }

  tipoAnuncio = '';

  constructor(private router: Router, private route: ActivatedRoute, private usuarioService: UsuarioService, private carrinhoService: CarrinhoService, private anuncioService: AnuncioService, private produtoService: ProdutoService) {
    
    this.anuncioId = this.route.snapshot.params['id'];
    let usuarioLogado = localStorage.getItem('usuarioLogado')!;

    this.carrinhoService.retornarCarrinhoDeUsuario(usuarioLogado).subscribe(retorno => {
      this.carrinhoId = retorno.carrinhoId;
    });
  
    this.anuncioService.retornarAnuncioPorId(parseInt(this.anuncioId)).subscribe(retorno => {

      if(retorno.tipoAnuncio === 'Venda') {
        this.id = this.anuncioId;
        this.titulo = retorno.titulo;
        this.fotoAnuncio = retorno.fotoAnuncio;
        this.descricao = retorno.descricao;
        this.preco = retorno.preco;
        this.tipoAnuncio = 'Venda';
      } else if(retorno.tipoAnuncio === 'Doação') {
        this.id = this.anuncioId;
        this.titulo = retorno.titulo;
        this.fotoAnuncio = retorno.fotoAnuncio;
        this.descricao = retorno.descricao;
        this.preco = '';
        this.tipoAnuncio = 'Doação';
      }
      
      this.usuarioService.retornarPorNomeUsuario(retorno.nomeUsuario).subscribe(user => {
        this.usuarioAnuncio = user;
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });
  }

  comprar() {

    let produto = {
      anuncioId: this.anuncioId,
      carrinhoId: this.carrinhoId,
      dataHoraProdutoAdicionado: new Date()
    };

    this.produtoService.adicionarProdutoEmCarrinhoDeUsuario(produto).subscribe(retorno => {
      console.log(retorno);
      this.router.navigate(['/carrinho-compras/' + this.carrinhoId]);
    }, error => {
      console.log(error);
    })
  }

  goToProfilePage() {
    this.router.navigate(['/perfil/' + this.usuarioAnuncio.nomeUsuario]);
  }
}

