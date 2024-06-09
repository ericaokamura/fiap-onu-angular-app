import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";
import { DadosPerfilComponent } from './dados-perfil.component';
import { DadosPerfilRightSideModule } from '../../components/dados-perfil-right-side/dados-perfil-right-side.module';


@NgModule({
    declarations: [
        DadosPerfilComponent
    ],
    imports: [
        BrowserModule,
        MenuBarModule,
        DadosPerfilRightSideModule
    ]
})
export class DadosPerfilModule {}
  