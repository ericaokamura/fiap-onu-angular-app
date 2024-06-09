import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { BrowserModule } from "@angular/platform-browser";
import { MenuBarModule } from "src/app/shared/menu-bar/menu-bar.module";
import { ConfigComponent } from "./config.component";


@NgModule({
    declarations: [
        ConfigComponent
    ],
    imports: [
        BrowserModule,
        MenuBarModule,
        MatSlideToggleModule,
        FormsModule
    ]
})
export class ConfigModule {}