import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'wsapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sale-client';
  counter = 0;
  socket = io('http://localhost:3333');
  ngOnInit(): void {
 
    this.socket.on('connect', () => {
      this.socket.emit('events', { test: 'test' });

      this.socket.emit('identity', 'Atul', response =>
        console.log('Identity:', response)
      );
    });

    this.socket.on('events', (data: any) => {
      this.counter = this.counter + 1;
      console.log('on event', { data: data, counter: this.counter });
    });

    this.socket.on('exception', data => {
      console.log('event', data);
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected');
    });
  }
}
