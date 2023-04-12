import { Module } from '@nestjs/common';
import { PcMemberService } from './pc-member.service';
import { PcMemberController } from './pc-member.controller';
import { PcMember } from './entities/pc-member.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([PcMember])],
  controllers: [PcMemberController],
  providers: [PcMemberService]
})
export class PcMemberModule {}
