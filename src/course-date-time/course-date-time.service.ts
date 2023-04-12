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
    const queryParams = [];
    let query = "update course_date_time set";
  
    if (updateCourseDateTimeDto.courseID !== undefined && updateCourseDateTimeDto.courseID !== null) {
      query += " courseID=?,";
      queryParams.push(updateCourseDateTimeDto.courseID);
    }
  
    if (updateCourseDateTimeDto.courseDate !== undefined && updateCourseDateTimeDto.courseDate !== null) {
      query += " courseDate=?,";
      queryParams.push(updateCourseDateTimeDto.courseDate);
    }
    if (updateCourseDateTimeDto.courseTime !== undefined && updateCourseDateTimeDto.courseTime !== null) {
      query += " courseTime=?,";
      queryParams.push(updateCourseDateTimeDto.courseTime);
    }
    
    // Remove the trailing comma
    query = query.slice(0, -1);
  
    query += " where courseDateTimeID=?";
    queryParams.push(id);
    console.log(query)
    console.log(queryParams)
    return this.courseDateTimeRepository.query(query, queryParams);
  }
  

  remove(id: number) {
    return this.courseDateTimeRepository.query(`delete from course_date_time where courseDateTimeID=${id}`);
  }
}
