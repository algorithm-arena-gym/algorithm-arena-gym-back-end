import { Module } from '@nestjs/common';
import { PrCourseService } from './pr-course.service';
import { PrCourseController } from './pr-course.controller';

@Module({
  controllers: [PrCourseController],
  providers: [PrCourseService]
})
export class PrCourseModule {}
