import { Test, TestingModule } from '@nestjs/testing';
import { MorningController } from './morning.controller';
import { MorningService } from './morning.service';

describe('MorningController', () => {
  let controller: MorningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MorningController],
      providers: [MorningService],
    }).compile();

    controller = module.get<MorningController>(MorningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
