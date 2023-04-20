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
    WHERE course_member.memberID = ${id}
    ORDER BY
     CASE
          WHEN courseDate = 'Sunday' THEN 1
          WHEN courseDate = 'Monday' THEN 2
          WHEN courseDate = 'Tuesday' THEN 3
          WHEN courseDate = 'Wednesday' THEN 4
          WHEN courseDate = 'Thursday' THEN 5
          WHEN courseDate = 'Friday' THEN 6
          WHEN courseDate = 'Saturday' THEN 7
     END ASC,courseTime
    `);
  }
}
