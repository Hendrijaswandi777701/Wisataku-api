
import { NestFactory } from '@nestjs/core';
import {
  Transport,
  MicroserviceOptions,
} from '@nestjs/microservices';

import { ServiceReservasiModule } from './service-reservasi.module';

async function bootstrap() {
  const app =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      ServiceReservasiModule,
      {
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 5002,
        },
      },
    );

  await app.listen();

  console.log('Service Reservasi berjalan pada port 5002');
}

bootstrap();
