import { Test, TestingModule } from '@nestjs/testing';
import { PcMemberService } from './pc-member.service';

describe('PcMemberService', () => {
  let service: PcMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PcMemberService],
    }).compile();

    service = module.get<PcMemberService>(PcMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
