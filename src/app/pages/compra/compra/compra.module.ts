import { MatCardModule } from '@angular/material/card';
import { CardAnuncioModule } from './../../../shared/card-anuncio/card-anuncio.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";
import { CompraComponent } from "./compra.component";
import { VisualizarAnuncioModule } from '../../visualizar-anuncio/visualizar-anuncio.module';


@NgModule({
    declarations: [
        CompraComponent
    ],
    imports: [
        BrowserModule,
        MenuBarModule,
        FormsModule,
        CardAnuncioModule,
        VisualizarAnuncioModule,
        MatCardModule
    ]
})
export class CompraModule {}
  