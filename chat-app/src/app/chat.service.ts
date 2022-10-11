import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  url = 'http://localhost:3000';
  socket: any;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message: any) {
    this.socket.emit('message', message);
  }

  public getMessages = () => {
      return new Observable((observer) => {
          this.socket.on('message', (data: any) => {
              observer.next(data);
          });
      });
  }

}
