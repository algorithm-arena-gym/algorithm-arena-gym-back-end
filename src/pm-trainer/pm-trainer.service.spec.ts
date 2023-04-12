import { Test, TestingModule } from '@nestjs/testing';
import { PmTrainerService } from './pm-trainer.service';

describe('PmTrainerService', () => {
  let service: PmTrainerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PmTrainerService],
    }).compile();

    service = module.get<PmTrainerService>(PmTrainerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
