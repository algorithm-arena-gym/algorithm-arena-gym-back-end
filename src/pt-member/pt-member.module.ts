import { Module } from '@nestjs/common';
import { PtMemberService } from './pt-member.service';
import { PtMemberController } from './pt-member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PtMember } from './entities/pt-member.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PtMember])],
  controllers: [PtMemberController],
  providers: [PtMemberService]
})
export class PtMemberModule {}
