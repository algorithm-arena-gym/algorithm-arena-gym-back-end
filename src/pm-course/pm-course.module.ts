import { Module } from '@nestjs/common';
import { PmCourseService } from './pm-course.service';
import { PmCourseController } from './pm-course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PmCourse } from './entities/pm-course.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PmCourse])],
  controllers: [PmCourseController],
  providers: [PmCourseService]
})
export class PmCourseModule {}
