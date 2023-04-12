import { Module } from '@nestjs/common';
import { PtCourseService } from './pt-course.service';
import { PtCourseController } from './pt-course.controller';

@Module({
  controllers: [PtCourseController],
  providers: [PtCourseService]
})
export class PtCourseModule {}
