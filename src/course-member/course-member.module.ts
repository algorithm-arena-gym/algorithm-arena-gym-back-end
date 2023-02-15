import { Module } from '@nestjs/common';
import { CourseMemberService } from './course-member.service';
import { CourseMemberController } from './course-member.controller';

@Module({
  controllers: [CourseMemberController],
  providers: [CourseMemberService]
})
export class CourseMemberModule {}
