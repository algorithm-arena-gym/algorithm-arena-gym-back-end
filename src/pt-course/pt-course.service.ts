import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PtCourse } from './entities/pt-course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PtCourseService {
  constructor(
    @InjectRepository(PtCourse)
    private ptCourseRepository:Repository<PtCourse>,
  ){}
  findOne(id: number) {
    return this.ptCourseRepository.query(`
    SELECT * FROM course
    JOIN course_date_time
    ON course_date_time.courseID = course.courseID
    WHERE course.trainerID=${id}
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
