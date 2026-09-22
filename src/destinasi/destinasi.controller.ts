import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@ApiTags('Destinasi')
@Controller('destinasi')
export class DestinasiController {
  @Get()
  @ApiOperation({ summary: 'Menampilkan daftar destinasi wisata' })
  @ApiResponse({ status: 200, description: 'Daftar destinasi berhasil diambil' })
  findAll() {
    return 'Daftar destinasi wisata akan tampil di sini';
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail satu destinasi' })
  @ApiResponse({ status: 200, description: 'Detail destinasi berhasil diambil' })
  findOne(@Param('id') id: string) {
    return `Detail destinasi dengan ID ${id} akan tampil di sini`;
  }

  @Post()
  @ApiOperation({ summary: 'Menambahkan destinasi baru (khusus admin)' })
  @ApiResponse({ status: 201, description: 'Destinasi berhasil dibuat' })
  @ApiResponse({ status: 400, description: 'Data tidak valid' })
  create(@Body() dto: CreateDestinasiDto) {
    return dto;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Ubah sebagian data destinasi (khusus admin)' })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil diubah' })
  update(@Param('id') id: string, @Body() dto: UpdateDestinasiDto) {
    return `Destinasi dengan ID ${id} berhasil diubah`;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Hapus destinasi (khusus admin)' })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil dihapus' })
  remove(@Param('id') id: string) {
    return `Destinasi dengan ID ${id} berhasil dihapus`;
  }
}