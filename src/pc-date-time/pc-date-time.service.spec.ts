import { Test, TestingModule } from '@nestjs/testing';
import { PcDateTimeService } from './pc-date-time.service';

describe('PcDateTimeService', () => {
  let service: PcDateTimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PcDateTimeService],
    }).compile();

    service = module.get<PcDateTimeService>(PcDateTimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
