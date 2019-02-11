import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  message: string[] = [];

  add(message: string) {
      this.message.push(message);
  }

  clear() {
      this.message = [];
  }
}
