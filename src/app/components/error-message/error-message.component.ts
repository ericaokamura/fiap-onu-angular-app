import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../dados-perfil-right-side/dados-perfil-right-side.component';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {

  message: string = 'Mensagem de erro';

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.message = data.message;
  }

}
