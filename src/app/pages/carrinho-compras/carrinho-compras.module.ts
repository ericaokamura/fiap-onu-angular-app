import { CardCarrinhoModule } from './../../shared/card-carrinho/card-carrinho.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";
import { CarrinhoComprasComponent } from "./carrinho-compras.component";
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        CarrinhoComprasComponent
    ],
    imports: [
        BrowserModule,
        MenuBarModule,
        CardCarrinhoModule,
        RouterModule
    ]

})
export class CarrinhoComprasModule { }
  