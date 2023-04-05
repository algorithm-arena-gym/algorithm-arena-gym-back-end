import { Injectable } from '@nestjs/common';
import { CreateCourseDateTimeDto } from './dto/create-course-date-time.dto';
import { UpdateCourseDateTimeDto } from './dto/update-course-date-time.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseDateTime } from './entities/course-date-time.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseDateTimeService {
  constructor(
    @InjectRepository(CourseDateTime)
    private courseDateTimeRepository:Repository<CourseDateTime>,
  ) {}
  create(createCourseDateTimeDto: CreateCourseDateTimeDto) {
    return this.courseDateTimeRepository.query(`insert into course_date_time(courseID,courseDate,courseTime) 
    values(${createCourseDateTimeDto.courseID},'${createCourseDateTimeDto.courseDate}','${createCourseDateTimeDto.courseTime}')
    `);
  }

  findAll() {
    return this.courseDateTimeRepository.query(`select * from course_date_time`);
  }

  findOne(id: number) {
    return this.courseDateTimeRepository.query(`select * from course_date_time where courseDateTimeID=${id}`);
  }

  update(id: number, updateCourseDateTimeDto: UpdateCourseDateTimeDto) {
    return  this.courseDateTimeRepository.query(`update course_date_time set
    courseID=${updateCourseDateTimeDto.courseID},
    courseDate='${updateCourseDateTimeDto.courseDate}',
    courseTime='${updateCourseDateTimeDto.courseTime}'
    where courseDateTimeID=${id}`)
  }

  remove(id: number) {
    return this.courseDateTimeRepository.query(`delete from course_date_time where courseDateTimeID=${id}`);
  }
}
