import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from "./login.component";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        BrowserModule,
        MenuBarModule,
        RouterModule,
        FormsModule
    ]
})
export class LoginModule { }
  