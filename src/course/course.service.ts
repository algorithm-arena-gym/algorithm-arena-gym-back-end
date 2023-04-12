import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseReposity: Repository<Course>,
  ) {}

  create(createCourseDto: CreateCourseDto) {
    return this.courseReposity.query(`
    INSERT INTO course(
      coursePic,
      courseName,
      trainerID,
      detail
      )
      VALUES('${createCourseDto.coursePic}',
      '${createCourseDto.courseName}',
      ${createCourseDto.trainerID},
      '${createCourseDto.detail}'
      )`);
  }

  findAll() {
    return this.courseReposity.query(`select * from course`);
  }

  findOne(id: number) {
    return this.courseReposity.query(
      `select * from course where courseID=${id}`,
    );
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    const queryParams = [];
    let query = "update course set";
  
    if (updateCourseDto.coursePic !== undefined && updateCourseDto.coursePic !== null) {
      query += " coursePic=?,";
      queryParams.push(updateCourseDto.coursePic);
    }
  
    if (updateCourseDto.courseName !== undefined && updateCourseDto.courseName !== null) {
      query += " courseName=?,";
      queryParams.push(updateCourseDto.courseName);
    }
    if (updateCourseDto.trainerID !== undefined && updateCourseDto.trainerID !== null) {
      query += " trainerID=?,";
      queryParams.push(updateCourseDto.trainerID);
    }
    if (updateCourseDto.detail !== undefined && updateCourseDto.detail !== null) {
      query += " detail=?,";
      queryParams.push(updateCourseDto.detail);
    }
    
    // Remove the trailing comma
    query = query.slice(0, -1);
  
    query += " where courseID=?";
    queryParams.push(id);
    console.log(query)
    console.log(queryParams)
    return this.courseReposity.query(query, queryParams);
   
  }

  remove(id: number) {
    return this.courseReposity.query(`delete from course where courseID=${id}`);
  }
}
