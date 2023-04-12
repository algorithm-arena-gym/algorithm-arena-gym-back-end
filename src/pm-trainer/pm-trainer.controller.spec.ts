import { Test, TestingModule } from '@nestjs/testing';
import { PmTrainerController } from './pm-trainer.controller';
import { PmTrainerService } from './pm-trainer.service';

describe('PmTrainerController', () => {
  let controller: PmTrainerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PmTrainerController],
      providers: [PmTrainerService],
    }).compile();

    controller = module.get<PmTrainerController>(PmTrainerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
