import { Injectable } from '@nestjs/common';
import { CreatePmCourseDto } from './dto/create-pm-course.dto';
import { UpdatePmCourseDto } from './dto/update-pm-course.dto';

@Injectable()
export class PmCourseService {
  create(createPmCourseDto: CreatePmCourseDto) {
    return 'This action adds a new pmCourse';
  }

  findAll() {
    return `This action returns all pmCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pmCourse`;
  }

  update(id: number, updatePmCourseDto: UpdatePmCourseDto) {
    return `This action updates a #${id} pmCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} pmCourse`;
  }
}
