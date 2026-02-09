import { Test, TestingModule } from '@nestjs/testing';
import { MorningService } from './morning.service';

describe('MorningService', () => {
  let service: MorningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MorningService],
    }).compile();

    service = module.get<MorningService>(MorningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
