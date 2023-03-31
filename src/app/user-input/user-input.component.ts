import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
    @Output() messageSent = new EventEmitter<string>();

    addNewItem(value:string) {
      this.messageSent.emit(value);
    }
}