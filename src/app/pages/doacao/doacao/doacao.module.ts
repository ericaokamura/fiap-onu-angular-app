import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";
import { DoacaoComponent } from "./doacao.component";

@NgModule({
    declarations: [
        DoacaoComponent
    ],
    imports: [
        BrowserModule,
        MenuBarModule,
        FormsModule
    ]
})
export class DoacaoModule { }
  