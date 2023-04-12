import { Module } from '@nestjs/common';
import { PcMemberService } from './pc-member.service';
import { PcMemberController } from './pc-member.controller';

@Module({
  controllers: [PcMemberController],
  providers: [PcMemberService]
})
export class PcMemberModule {}
