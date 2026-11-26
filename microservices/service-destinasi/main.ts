
import { NestFactory } from '@nestjs/core';
import {
  Transport,
  MicroserviceOptions,
} from '@nestjs/microservices';

import { ServiceDestinasiModule } from './service-destinasi.module';

async function bootstrap() {
  const app =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      ServiceDestinasiModule,
      {
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 5001,
        },
      },
    );

  await app.listen();

  console.log('Service Destinasi berjalan pada port 5001');
}

bootstrap();
