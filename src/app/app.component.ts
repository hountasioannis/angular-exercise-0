import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  receivedMessage: string = "";
  sentOddMessage:string[]=[]
  sentEvenMessage:string[]=[]
  even: boolean = true

    onMessageReceived(message: string) {
    this.receivedMessage = message;
    this.even = AppComponent.isEven(this.receivedMessage)

    if(this.even) {
      this.sentEvenMessage.push(this.receivedMessage)
    } else {
      this.sentOddMessage.push(this.receivedMessage)
    }
  }

  static isEven(receivedMessage:string):boolean{
    if(receivedMessage.length % 2 === 0) {
      return true
    } else {
      return false
    }
  }

}
