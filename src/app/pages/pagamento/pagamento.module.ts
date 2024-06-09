import { PagamentoSucessoModule } from './../../components/pagamento-sucesso/pagamento-sucesso.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PagamentoComponent } from "./pagamento.component";

@NgModule({
    declarations: [
        PagamentoComponent
    ],
    imports: [
        BrowserModule,
        MenuBarModule,
        RouterModule,
        FormsModule,
        PagamentoSucessoModule
    ]
})
export class PagamentoModule { }