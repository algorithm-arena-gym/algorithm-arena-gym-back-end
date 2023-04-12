import { Module } from '@nestjs/common';
import { PtMemberService } from './pt-member.service';
import { PtMemberController } from './pt-member.controller';

@Module({
  controllers: [PtMemberController],
  providers: [PtMemberService]
})
export class PtMemberModule {}
