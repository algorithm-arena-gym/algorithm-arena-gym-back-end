import { Test, TestingModule } from '@nestjs/testing';
import { PtMemberService } from './pt-member.service';

describe('PtMemberService', () => {
  let service: PtMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PtMemberService],
    }).compile();

    service = module.get<PtMemberService>(PtMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
