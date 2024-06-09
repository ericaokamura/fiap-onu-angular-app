import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { VendaComponent } from "./venda.component";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";

@NgModule({
    declarations: [
        VendaComponent
    ],
    imports: [
        BrowserModule,
        MenuBarModule,
        FormsModule
    ]
})
export class VendaModule { }
  