
import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

import { ReservasiService } from './reservasi.service';

@Controller()
export class ServiceReservasiController {
  constructor(
    private readonly reservasiService: ReservasiService,
  ) {}

  @MessagePattern('reservasi.findAll')
  findAll() {
    return this.reservasiService.findAll();
  }

  @MessagePattern('reservasi.findOne')
  findOne(@Payload() data: { id: number }) {
    return this.reservasiService.findOne(Number(data.id));
  }

  @MessagePattern('reservasi.create')
  create(
    @Payload()
    data: {
      namaPemesan: string;
      destinasiId: number;
      jumlahOrang: number;
      tanggal: string;
      totalHarga: number;
    },
  ) {
    return this.reservasiService.create({
      ...data,
      tanggal: new Date(data.tanggal),
    });
  }
}
