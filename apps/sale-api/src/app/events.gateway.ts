import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse
} from '@nestjs/websockets';
import { from, Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client, Server } from 'socket.io';
import { Cron, Interval, Timeout, NestSchedule } from 'nest-schedule';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

@WebSocketGateway()
@Injectable() // Only support SINGLETON scope
export class EventsGateway extends NestSchedule {
  @WebSocketServer()
  server: Server;

  @Cron('* * * * * *') // Run every second
  @SubscribeMessage('events')
  findAll(client: Client, data: any): Observable<WsResponse<number>> {
    return from([100, 232, 3333]).pipe(
      map(item => ({
        event: 'events',
        data: item
      }))
    );
  }

//   @Cron('* * * * * *') // Run every second
//   scheduledJob() {
//     console.log('[Scheduler]: scheduled jobs has been started');
//     this.server.emit('events', [200, 300, 400]);
//   }

  @SubscribeMessage('identity')
  async identity(client: Client, data: number): Promise<number> {
    console.log(data);
    return data;
  }
}
