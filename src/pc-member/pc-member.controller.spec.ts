import { Test, TestingModule } from '@nestjs/testing';
import { PcMemberController } from './pc-member.controller';
import { PcMemberService } from './pc-member.service';

describe('PcMemberController', () => {
  let controller: PcMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PcMemberController],
      providers: [PcMemberService],
    }).compile();

    controller = module.get<PcMemberController>(PcMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
