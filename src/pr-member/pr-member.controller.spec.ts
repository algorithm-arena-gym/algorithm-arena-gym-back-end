import { Test, TestingModule } from '@nestjs/testing';
import { PrMemberController } from './pr-member.controller';
import { PrMemberService } from './pr-member.service';

describe('PrMemberController', () => {
  let controller: PrMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrMemberController],
      providers: [PrMemberService],
    }).compile();

    controller = module.get<PrMemberController>(PrMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
