
import { Module } from '@nestjs/common';

import { PrismaModule } from '../../src/prisma/prisma.module';
import { DestinasiService } from './destinasi.service';
import { ServiceDestinasiController } from './service-destinasi.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ServiceDestinasiController],
  providers: [DestinasiService],
})
export class ServiceDestinasiModule {}
