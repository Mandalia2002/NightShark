import { Test, TestingModule } from '@nestjs/testing';
import { NightService } from './night.service';

describe('NightService', () => {
  let service: NightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NightService],
    }).compile();

    service = module.get<NightService>(NightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
