import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events.gateway';

import { ScheduleModule } from 'nest-schedule';

@Module({
  imports: [
    ScheduleModule.register(),
  ],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
  exports: [EventsGateway]
})
export class AppModule {}
