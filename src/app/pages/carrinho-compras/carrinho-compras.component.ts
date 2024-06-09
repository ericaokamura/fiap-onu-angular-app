import { ProdutoTipoAnuncio } from './../../models/produto-tipo-anuncio';
import { Component, Inject, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { CompraService } from 'src/app/services/compra.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.scss']
})
export class CarrinhoComprasComponent {

  total: number = 0;

  produtosComTipoAnuncio: ProdutoTipoAnuncio[] = [];

  constructor(private route: ActivatedRoute, private router: Router, @Inject(Injector) private injector: Injector, private produtoService: ProdutoService, private anuncioService: AnuncioService) {
    
    let carrinhoId = this.route.snapshot.params['id'];

    this.produtoService.retornarProdutosEmCarrinhoDeUsuario(carrinhoId).subscribe(retorno => {
      this.produtosComTipoAnuncio = [];
      retorno.forEach(produto => {
        console.log('produto', produto);
        this.total = this.total + produto.preco;
        this.anuncioService.retornarAnuncioPorId(produto.anuncioId).subscribe(retorno => {
          
          let produtoTipoAnuncio: ProdutoTipoAnuncio = {
            anuncioId: produto.anuncioId,
            carrinhoId: produto.carrinhoId,
            titulo: produto.titulo,
            descricao: produto.descricao,
            fotoAnuncio: produto.fotoAnuncio,
            tipoAnuncio: retorno.tipoAnuncio === 'Venda' ? 'Venda' : 'Doação',
            preco: produto.preco,
            dataHoraProdutoAdicionado: produto.dataHoraProdutoAdicionado
          }
          this.produtosComTipoAnuncio.push(produtoTipoAnuncio);
        })
      })
    }, error => {
      console.log(error);
    })

    

  }

  finalizarCompra() {
    this.router.navigate(['/pagamento']);
    console.log("Compra finalizada!");
  
  }
}
