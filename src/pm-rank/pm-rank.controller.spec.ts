import { Test, TestingModule } from '@nestjs/testing';
import { PmRankController } from './pm-rank.controller';
import { PmRankService } from './pm-rank.service';

describe('PmRankController', () => {
  let controller: PmRankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PmRankController],
      providers: [PmRankService],
    }).compile();

    controller = module.get<PmRankController>(PmRankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
