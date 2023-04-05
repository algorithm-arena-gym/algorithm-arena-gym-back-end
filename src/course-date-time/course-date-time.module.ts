import { Module } from '@nestjs/common';
import { CourseDateTimeService } from './course-date-time.service';
import { CourseDateTimeController } from './course-date-time.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseDateTime } from './entities/course-date-time.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CourseDateTime])],
  controllers: [CourseDateTimeController],
  providers: [CourseDateTimeService]
})
export class CourseDateTimeModule {}
