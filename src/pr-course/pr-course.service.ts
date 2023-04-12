import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrCourse } from './entities/pr-course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrCourseService {
  constructor(
    @InjectRepository(PrCourse)
    private prCourseRepository: Repository<PrCourse>,
  ) {}
  findOne(id: number) {
    return this.prCourseRepository.query(`SELECT * FROM rank_course JOIN course ON rank_course.courseID = course.courseID WHERE rankID=${id}`);
  }

}
