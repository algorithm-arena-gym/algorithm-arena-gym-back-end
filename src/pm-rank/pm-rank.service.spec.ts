import { Test, TestingModule } from '@nestjs/testing';
import { PmRankService } from './pm-rank.service';

describe('PmRankService', () => {
  let service: PmRankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PmRankService],
    }).compile();

    service = module.get<PmRankService>(PmRankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
