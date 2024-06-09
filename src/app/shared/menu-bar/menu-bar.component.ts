import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnuncioService } from 'src/app/services/anuncio.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  itemMenuCompra: boolean = false;
  itemMenuVenda: boolean = false;
  itemMenuDoacao: boolean = false;
  itemMenuRecebimento: boolean = false;
  logged = true;
  carrinhoId = '';

  constructor(private route: ActivatedRoute, private router: Router, private anuncioService: AnuncioService){

    if(this.router.url === '/login' || this.router.url === '/cadastro') {

      this.logged = false;

    } else {

      this.carrinhoId = localStorage.getItem('carrinhoId')!;

      this.logged = true;

      if(this.router.url === '/venda') {

        this.itemMenuCompra = false;
        this.itemMenuVenda = true;
        this.itemMenuDoacao = false;
        this.itemMenuRecebimento = false;
        
      } else if(this.router.url === '/compra') {

        this.itemMenuCompra = true;
        this.itemMenuVenda = false;
        this.itemMenuDoacao = false;
        this.itemMenuRecebimento = false;

      } else if(this.router.url === '/doacao') {

        this.itemMenuCompra = false;
        this.itemMenuVenda = false;
        this.itemMenuDoacao = true;
        this.itemMenuRecebimento = false;

      } else if(this.router.url === '/recebimento') {

        this.itemMenuCompra = false;
        this.itemMenuVenda = false;
        this.itemMenuDoacao = false;
        this.itemMenuRecebimento = true;

      } else if(this.router.url.startsWith('/visualizar-anuncio/')) {

        let anuncioId = this.route.snapshot.params['id'];

        this.anuncioService.retornarAnuncioPorId(anuncioId).subscribe(retorno => {
          console.log("anuncio", retorno);
          if(retorno.tipoAnuncio === 'Venda') {
            this.itemMenuCompra = true;
            this.itemMenuRecebimento = false;
            this.itemMenuVenda = false;
            this.itemMenuDoacao = false;
          } else if(retorno.tipoAnuncio === 'Doação'){
            this.itemMenuCompra = false;
            this.itemMenuRecebimento = true;
            this.itemMenuVenda = false;
            this.itemMenuDoacao = false;
          }
        })
        console.log("itemCompra", this.itemMenuCompra);
        console.log("itemRecebimento", this.itemMenuRecebimento);
      }
    }
  }
  
  goTo(page: string) {
    
    switch(page) {
      case 'compra':{
        this.router.navigate(['/compra']); 
        break;
      }
      case 'venda': {
        this.router.navigate(['/venda']); 
        break;
      }
      case 'doacao': {
        this.router.navigate(['/doacao']); 
        break;
      }
      case 'recebimento': {
        this.router.navigate(['/recebimento']); 
        break;
      }
      case 'cart': {
        this.router.navigate(['/carrinho-compras/' + this.carrinhoId]); 
        break;
      }
      case 'dados-perfil': {
        this.router.navigate(['/dados-perfil']); 
        break;
      }
      case 'config': {
        this.router.navigate(['/config']); 
        break;
      }
    }
    
  }

}
