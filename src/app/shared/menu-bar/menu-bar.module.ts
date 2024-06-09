import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AppComponent } from "src/app/app.component";
import { MenuBarComponent } from "src/app/shared/menu-bar/menu-bar.component";

@NgModule({
    declarations: [
      MenuBarComponent,
    ],
    imports: [
      BrowserModule
    ],
    exports: [
        MenuBarComponent
    ]
  })
  export class MenuBarModule {

    
   }