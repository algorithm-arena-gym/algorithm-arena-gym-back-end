import { Test, TestingModule } from '@nestjs/testing';
import { PcRankService } from './pc-rank.service';

describe('PcRankService', () => {
  let service: PcRankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PcRankService],
    }).compile();

    service = module.get<PcRankService>(PcRankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
