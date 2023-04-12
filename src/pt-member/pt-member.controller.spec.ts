import { Test, TestingModule } from '@nestjs/testing';
import { PtMemberController } from './pt-member.controller';
import { PtMemberService } from './pt-member.service';

describe('PtMemberController', () => {
  let controller: PtMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PtMemberController],
      providers: [PtMemberService],
    }).compile();

    controller = module.get<PtMemberController>(PtMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
