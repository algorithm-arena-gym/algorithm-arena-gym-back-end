import { Test, TestingModule } from '@nestjs/testing';
import { PcDateTimeController } from './pc-date-time.controller';
import { PcDateTimeService } from './pc-date-time.service';

describe('PcDateTimeController', () => {
  let controller: PcDateTimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PcDateTimeController],
      providers: [PcDateTimeService],
    }).compile();

    controller = module.get<PcDateTimeController>(PcDateTimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
