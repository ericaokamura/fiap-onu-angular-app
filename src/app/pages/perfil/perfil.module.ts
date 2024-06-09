import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";
import { RouterModule } from "@angular/router";
import { PerfilComponent } from './perfil.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        PerfilComponent
    ],
    imports: [
        BrowserModule,
        MenuBarModule,
        RouterModule,
        MatCardModule
    ]
})
export class PerfilModule { }