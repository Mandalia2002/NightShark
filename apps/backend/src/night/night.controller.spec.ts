import { Test, TestingModule } from '@nestjs/testing';
import { NightController } from './night.controller';
import { NightService } from './night.service';

describe('NightController', () => {
  let controller: NightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NightController],
      providers: [NightService],
    }).compile();

    controller = module.get<NightController>(NightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
