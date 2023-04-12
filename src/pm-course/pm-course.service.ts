import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PmCourse } from './entities/pm-course.entity';
import { Repository } from 'typeorm';
@Injectable()
export class PmCourseService {
  constructor(
    @InjectRepository(PmCourse)
    private pmCourseRepository:Repository<PmCourse>,
  ){}
  findOne(id: number) {
    return this.pmCourseRepository.query(`
    SELECT *
    FROM course_member
    JOIN course
    ON course_member.courseID = course.courseID
    JOIN course_date_time
    ON course_date_time.courseID = course.courseID
    WHERE course_member.memberID = ${id};
    `);
  }
}
