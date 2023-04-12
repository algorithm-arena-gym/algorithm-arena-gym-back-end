import { Test, TestingModule } from '@nestjs/testing';
import { PcRankController } from './pc-rank.controller';
import { PcRankService } from './pc-rank.service';

describe('PcRankController', () => {
  let controller: PcRankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PcRankController],
      providers: [PcRankService],
    }).compile();

    controller = module.get<PcRankController>(PcRankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
