import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorMessageModule } from './../error-message/error-message.module';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DadosPerfilRightSideComponent } from "./dados-perfil-right-side.component";
import { MatCardModule } from '@angular/material/card';



@NgModule({
    declarations: [
        DadosPerfilRightSideComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        ErrorMessageModule,
        MatSnackBarModule,
        MatCardModule
    ],
    exports: [ 
        DadosPerfilRightSideComponent
    ]
})
export class DadosPerfilRightSideModule {}
  