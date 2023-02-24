import { Module } from '@nestjs/common';
import { TrainerMemberService } from './trainer-member.service';
import { TrainerMemberController } from './trainer-member.controller';

@Module({
  controllers: [TrainerMemberController],
  providers: [TrainerMemberService],
})
export class TrainerMemberModule {}
