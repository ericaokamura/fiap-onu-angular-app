import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorMessageComponent } from './error-message.component';


@NgModule({
    declarations: [
        ErrorMessageComponent
    ],
    imports: [
        BrowserModule,
        MatDialogModule
    ],
    exports: [ 
        ErrorMessageComponent
    ]
})
export class ErrorMessageModule {}
  