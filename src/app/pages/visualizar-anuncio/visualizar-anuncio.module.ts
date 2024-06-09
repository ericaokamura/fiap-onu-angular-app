import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";
import { VisualizarAnuncioComponent } from "./visualizar-anuncio.component";


@NgModule({
    declarations: [
        VisualizarAnuncioComponent
    ],
    imports: [
        BrowserModule,
        MenuBarModule
    ]
})
export class VisualizarAnuncioModule {}
  