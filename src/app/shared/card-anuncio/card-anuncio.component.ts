import { Component, Inject, Injector, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AnuncioService } from 'src/app/services/anuncio.service';

@Component({
  selector: 'app-card-anuncio',
  templateUrl: './card-anuncio.component.html',
  styleUrls: ['./card-anuncio.component.scss']
})
export class CardAnuncioComponent {

  @Input() id = '';
  @Input() titulo = '';
  @Input() fotoAnuncio = '';
  
  constructor(private router: Router, @Inject(Injector) private injector: Injector, private anuncioService: AnuncioService) {


  }

  visualizar() {
    this.anuncioService.retornarAnuncioPorId(parseInt(this.id)).subscribe(retorno => {
      console.log(retorno.id)
      this.router.navigate(['/visualizar-anuncio/' + retorno.id]);
    })
  }

}
