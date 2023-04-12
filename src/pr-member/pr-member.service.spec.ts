import { Test, TestingModule } from '@nestjs/testing';
import { PrMemberService } from './pr-member.service';

describe('PrMemberService', () => {
  let service: PrMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrMemberService],
    }).compile();

    service = module.get<PrMemberService>(PrMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
