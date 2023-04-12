import { Module } from '@nestjs/common';
import { PrMemberService } from './pr-member.service';
import { PrMemberController } from './pr-member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrMember } from './entities/pr-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrMember])],
  controllers: [PrMemberController],
  providers: [PrMemberService]
})
export class PrMemberModule {}
