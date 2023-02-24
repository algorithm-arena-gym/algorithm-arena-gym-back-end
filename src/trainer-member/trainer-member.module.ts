import { Module } from '@nestjs/common';
import { TrainerMemberService } from './trainer-member.service';
import { TrainerMemberController } from './trainer-member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainerMember } from './entities/trainer-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainerMember])],
  controllers: [TrainerMemberController],
  providers: [TrainerMemberService]
})
export class TrainerMemberModule {}
