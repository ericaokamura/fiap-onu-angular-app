import { Component, Inject, Injector, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-card-carrinho',
  templateUrl: './card-carrinho.component.html',
  styleUrls: ['./card-carrinho.component.scss']
})
export class CardCarrinhoComponent {

  
  @Input() produto = '';
  @Input() preco = 0;
  @Input() fotoAnuncio = '';
  @Input() tipoAnuncio = '';

  constructor(private route: ActivatedRoute, private router: Router, @Inject(Injector) private injector: Injector, private produtoService: ProdutoService, private carrinhoService: CarrinhoService) {    
  
  
  }


}
