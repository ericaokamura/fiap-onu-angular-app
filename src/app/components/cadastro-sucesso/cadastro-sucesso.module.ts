import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CadastroSucessoComponent } from "./cadastro-sucesso.component";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";

@NgModule({
    declarations: [
        CadastroSucessoComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        CadastroSucessoComponent
    ]
})
export class CadastroSucessoModule { }
  