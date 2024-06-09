import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";
import { CadastroComponent } from "./cadastro.component";
import { FormsModule } from "@angular/forms";
import { CadastroSucessoModule } from "src/app/components/cadastro-sucesso/cadastro-sucesso.module";

@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        BrowserModule,
        MenuBarModule,
        FormsModule,
        CadastroSucessoModule
    ]
})
export class CadastroModule { }
  