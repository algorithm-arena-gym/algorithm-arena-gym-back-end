import { Module } from '@nestjs/common';
import { RankCourseService } from './rank-course.service';
import { RankCourseController } from './rank-course.controller';
import { RankCourse } from './entities/rank-course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RankCourse])],
  controllers: [RankCourseController],
  providers: [RankCourseService]
})
export class RankCourseModule {}
