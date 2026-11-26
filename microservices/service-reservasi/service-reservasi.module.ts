
import { Module } from '@nestjs/common';

import { PrismaModule } from '../../src/prisma/prisma.module';
import { ReservasiService } from './reservasi.service';
import { ServiceReservasiController } from './service-reservasi.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ServiceReservasiController],
  providers: [ReservasiService],
})
export class ServiceReservasiModule {}
