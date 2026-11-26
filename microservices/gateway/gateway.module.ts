
import { Module } from '@nestjs/common';
import {
  ClientsModule,
  Transport,
} from '@nestjs/microservices';

import { GatewayController } from './gateway.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DESTINASI_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 5001,
        },
      },
      {
        name: 'RESERVASI_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 5002,
        },
      },
    ]),
  ],
  controllers: [GatewayController],
})
export class GatewayModule {}
