import { Module } from '@nestjs/common';
import { RankCourseService } from './rank-course.service';
import { RankCourseController } from './rank-course.controller';

@Module({
  controllers: [RankCourseController],
  providers: [RankCourseService]
})
export class RankCourseModule {}
