import { Component, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Anuncio } from 'src/app/models/anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent {

  anuncios: Anuncio[] = [];

  todosAnuncios: Anuncio[] = [];

  titulo: string = '';

  anunciosArray: Array<Anuncio[]> = [];

  constructor(@Inject(Injector) private injector: Injector, private router: Router, private anuncioService: AnuncioService) {
    this.anuncioService = this.injector.get(AnuncioService);
    this.anuncios = [];
    this.todosAnuncios = [];
    this.anuncioService.retornarTodosAnuncios().subscribe(retorno => {
      
      retorno.forEach(anuncio => {
        if(anuncio.tipoAnuncio === 'Venda') {
          this.anuncios.push(anuncio);
        }
      })
      this.anunciosArray = this.groupArray(this.anuncios, 2);
      this.todosAnuncios = this.anuncios;
    })
  }

  getDescricao(inputText: any) {
    console.log(inputText)
    this.titulo = inputText.value
  }

  pesquisar() {
    console.log(this.titulo)
    if(this.titulo === '') {
      this.anuncios = this.todosAnuncios;
      this.anunciosArray = this.groupArray(this.anuncios, 2);
    } else {
      this.anuncios = [];
      this.anuncioService.retornarAnunciosPorTitulo(this.titulo).subscribe(retorno => {
        console.log("anuncios pesquisa por descricao", retorno);
        retorno.forEach(anuncio => {
          if(anuncio.tipoAnuncio === 'Venda') {
            this.anuncios.push(anuncio);
          }
        })
        this.anunciosArray = this.groupArray(this.anuncios, 2);
      })
    }
    console.log("pesquisa");
    this.titulo = '';
  }

  ordenarPorPreco(){
    this.anuncios = [];
    this.anuncioService.ordenarPorPreco().subscribe(retorno => {
      retorno.forEach(anuncio => {
        if(anuncio.tipoAnuncio === 'Venda') {
          this.anuncios.push(anuncio);
        }
      })
      this.anunciosArray = this.groupArray(this.anuncios, 2);
    });
  }

  ordenarPorDataHoraPublicacao() {
    this.anuncios = [];
    this.anuncioService.ordenarPorDataHoraPublicacao().subscribe(retorno => {
      retorno.forEach(anuncio => {
        if(anuncio.tipoAnuncio === 'Venda') {
          this.anuncios.push(anuncio);
        }
      })
      this.anunciosArray = this.groupArray(this.anuncios, 2);
    });
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

  visualizar(anuncio: any) {
    this.router.navigate(['/visualizar-anuncio/' + anuncio.id]);
  }

}
