import { Test, TestingModule } from '@nestjs/testing';
import { DestinasiService } from './destinasi.service';
import { PrismaService } from '../prisma/prisma.service';

describe('DestinasiService', () => {
  let service: DestinasiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DestinasiService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<DestinasiService>(DestinasiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});