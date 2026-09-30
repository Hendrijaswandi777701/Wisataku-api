import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module'; 
import { DestinasiModule } from './destinasi/destinasi.module';

@Module({
  imports: [PrismaModule, DestinasiModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}