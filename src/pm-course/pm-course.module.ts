import { Module } from '@nestjs/common';
import { PmCourseService } from './pm-course.service';
import { PmCourseController } from './pm-course.controller';

@Module({
  controllers: [PmCourseController],
  providers: [PmCourseService]
})
export class PmCourseModule {}
