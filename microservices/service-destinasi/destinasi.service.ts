
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';

@Injectable()
export class DestinasiService {
  constructor(private prisma: PrismaService) {}

  async findAll(kategori?: string) {
    return this.prisma.destinasi.findMany({
      where: kategori ? { kategori } : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const destinasi = await this.prisma.destinasi.findUnique({
      where: { id },
    });

    if (!destinasi) {
      throw new NotFoundException(
        `Destinasi dengan id ${id} tidak ditemukan`,
      );
    }

    return destinasi;
  }

  async findLengkap(id: number) {
    const destinasi = await this.prisma.destinasi.findUnique({
      where: { id },
      include: {
        ulasan: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!destinasi) {
      throw new NotFoundException(
        `Destinasi dengan id ${id} tidak ditemukan`,
      );
    }

    return destinasi;
  }
}
