import { Module } from '@nestjs/common';
import { DestinasiService } from './destinasi.service';
import { DestinasiController } from './destinasi.controller';
import { DestinasiResolver } from './destinasi.resolver';

@Module({
  controllers: [DestinasiController],
  providers: [
    DestinasiService,
    DestinasiResolver,
  ],
})
export class DestinasiModule {}