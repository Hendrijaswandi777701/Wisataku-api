
import { Test, TestingModule } from '@nestjs/testing';
import { DestinasiController } from './destinasi.controller';
import { DestinasiService } from './destinasi.service';
import { jest } from '@jest/globals';

describe('DestinasiController', () => {
  let controller: DestinasiController;

  const mockDestinasiService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinasiController],
      providers: [
        {
          provide: DestinasiService,
          useValue: mockDestinasiService,
        },
      ],
    }).compile();

    controller = module.get<DestinasiController>(DestinasiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
