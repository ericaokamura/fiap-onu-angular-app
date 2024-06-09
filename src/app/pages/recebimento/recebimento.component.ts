import { Component, Inject, Injector } from '@angular/core';
import { Anuncio } from 'src/app/models/anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';

@Component({
  selector: 'app-recebimento',
  templateUrl: './recebimento.component.html',
  styleUrls: ['./recebimento.component.scss']
})
export class RecebimentoComponent {

  anuncios: Anuncio[] = [];

  todosAnuncios: Anuncio[] = [];

  descricao: string = '';

  visualizar = false;

  anunciosArray: Array<Anuncio[]> = [];

  constructor(@Inject(Injector) private injector: Injector, private anuncioService: AnuncioService) {
    this.anuncioService = this.injector.get(AnuncioService);
    this.anuncioService.retornarTodosAnuncios().subscribe(retorno => {
      retorno.forEach(anuncio => {
        if(anuncio.tipoAnuncio === 'Doação') {
          this.anuncios.push(anuncio);
        }
      })
      this.anunciosArray = this.groupArray(this.anuncios, 2);
      this.todosAnuncios = this.anuncios;
    })
  }

  getDescricao(inputText: any) {
    console.log(inputText)
    this.descricao = inputText.value
  }

  pesquisar() {
    console.log(this.descricao)
    if(this.descricao === '') {
      this.anuncios = this.todosAnuncios;
      this.anunciosArray = this.groupArray(this.anuncios, 2);
    } else {
      this.anuncios = [];
      this.anuncioService.retornarAnunciosPorTitulo(this.descricao).subscribe(retorno => {
        retorno.forEach(anuncio => {
          if(anuncio.tipoAnuncio === 'Doação') {
            this.anuncios.push(anuncio);
          }
        })
        this.anunciosArray = this.groupArray(this.anuncios, 2);
      })
    }
    console.log("pesquisa");
    this.descricao = '';
  }

  ordenarPorDataHoraPublicacao() {
    this.anuncios = [];
    this.anuncioService.ordenarPorDataHoraPublicacao().subscribe(retorno => {
      retorno.forEach(anuncio => {
        if(anuncio.tipoAnuncio === 'Doação') {
          this.anuncios.push(anuncio);
        }
      })
      this.anunciosArray = this.groupArray(this.anuncios, 2);
      this.todosAnuncios = this.anuncios;
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

}
