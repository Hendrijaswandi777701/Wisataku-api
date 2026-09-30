import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDestinasiDto {
  @IsString()
  nama: string;

  @IsString()
  kategori: string;

  @IsOptional()
  @IsString()
  lokasi?: string;

  @IsNumber()
  hargaTiket: number;
}