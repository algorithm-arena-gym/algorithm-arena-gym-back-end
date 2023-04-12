import { Module } from '@nestjs/common';
import { PtCourseService } from './pt-course.service';
import { PtCourseController } from './pt-course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PtCourse } from './entities/pt-course.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PtCourse])],
  controllers: [PtCourseController],
  providers: [PtCourseService]
})
export class PtCourseModule {}
