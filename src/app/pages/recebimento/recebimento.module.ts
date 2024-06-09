import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";
import { VisualizarAnuncioModule } from '../visualizar-anuncio/visualizar-anuncio.module';
import { RecebimentoComponent } from './recebimento.component';
import { CardAnuncioModule } from "src/app/shared/card-anuncio/card-anuncio.module";


@NgModule({
    declarations: [
        RecebimentoComponent
    ],
    imports: [
        BrowserModule,
        MenuBarModule,
        FormsModule,
        CardAnuncioModule,
        VisualizarAnuncioModule
    ]
})
export class RecebimentoModule {}
  