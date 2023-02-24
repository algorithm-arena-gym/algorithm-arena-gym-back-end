import { Module } from '@nestjs/common';
import { CourseMemberService } from './course-member.service';
import { CourseMemberController } from './course-member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseMember } from './entities/course-member.entity';
@Module({
  imports:[TypeOrmModule.forFeature([CourseMember])],
  controllers: [CourseMemberController],
  providers: [CourseMemberService],
})
export class CourseMemberModule {}
