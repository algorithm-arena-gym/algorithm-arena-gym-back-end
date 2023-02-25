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
      courseName,
      price,
      detail
      )
      VALUES('${createCourseDto.courseName}',
      ${createCourseDto.price},
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
    return this.courseReposity.query(`
    update course set 
      courseName='${updateCourseDto.courseName}',
      price='${updateCourseDto.price}',
      detail='${updateCourseDto.detail}'
      where courseID=${id}
    `);
  }

  remove(id: number) {
    return this.courseReposity.query(`delete from course where courseID=${id}`);
  }
}
