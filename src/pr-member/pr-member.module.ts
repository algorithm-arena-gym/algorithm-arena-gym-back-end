import { Module } from '@nestjs/common';
import { PrMemberService } from './pr-member.service';
import { PrMemberController } from './pr-member.controller';

@Module({
  controllers: [PrMemberController],
  providers: [PrMemberService]
})
export class PrMemberModule {}
