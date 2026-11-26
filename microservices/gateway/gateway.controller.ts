
import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  ParseIntPipe,
  Inject,
  Body,
} from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class GatewayController {
  constructor(
    @Inject('DESTINASI_SERVICE')
    private readonly destinasiClient: ClientProxy,

    @Inject('RESERVASI_SERVICE')
    private readonly reservasiClient: ClientProxy,
  ) {}

  // =========================
  // DESTINASI
  // =========================

  @Get('destinasi')
  async findAll(@Query('kategori') kategori?: string) {
    return firstValueFrom(
      this.destinasiClient.send('destinasi.findAll', {
        kategori,
      }),
    );
  }

  @Get('destinasi/:id/lengkap')
  async findLengkap(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return firstValueFrom(
      this.destinasiClient.send('destinasi.findLengkap', {
        id,
      }),
    );
  }

  @Get('destinasi/:id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return firstValueFrom(
      this.destinasiClient.send('destinasi.findOne', {
        id,
      }),
    );
  }

  // =========================
  // RESERVASI
  // =========================

  @Get('reservasi')
  async findAllReservasi() {
    return firstValueFrom(
      this.reservasiClient.send('reservasi.findAll', {}),
    );
  }

  @Get('reservasi/:id')
  async findOneReservasi(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return firstValueFrom(
      this.reservasiClient.send('reservasi.findOne', {
        id,
      }),
    );
  }

  @Post('reservasi')
  async createReservasi(@Body() data: {
    namaPemesan: string;
    destinasiId: number;
    jumlahOrang: number;
    tanggal: string;
    totalHarga: number;
  }) {
    return firstValueFrom(
      this.reservasiClient.send('reservasi.create', data),
    );
  }
}
