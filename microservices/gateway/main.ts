
import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  app.setGlobalPrefix('api');

  await app.listen(3001);

  console.log('API Gateway berjalan di http://localhost:3001/api');
}

bootstrap();
