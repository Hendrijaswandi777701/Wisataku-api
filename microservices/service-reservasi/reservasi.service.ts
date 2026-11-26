
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';

@Injectable()
export class ReservasiService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.reservasi.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const reservasi = await this.prisma.reservasi.findUnique({
      where: { id },
    });

    if (!reservasi) {
      throw new NotFoundException(
        `Reservasi dengan id ${id} tidak ditemukan`,
      );
    }

    return reservasi;
  }

  async create(data: {
    namaPemesan: string;
    destinasiId: number;
    jumlahOrang: number;
    tanggal: Date;
    totalHarga: number;
  }) {
    return this.prisma.reservasi.create({
      data,
    });
  }
}
