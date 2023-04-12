import { Module } from '@nestjs/common';
import { PrCourseService } from './pr-course.service';
import { PrCourseController } from './pr-course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrCourse } from './entities/pr-course.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PrCourse])],
  controllers: [PrCourseController],
  providers: [PrCourseService]
})
export class PrCourseModule {}
