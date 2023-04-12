import { Injectable } from '@nestjs/common';
import { CreatePrCourseDto } from './dto/create-pr-course.dto';
import { UpdatePrCourseDto } from './dto/update-pr-course.dto';

@Injectable()
export class PrCourseService {
  create(createPrCourseDto: CreatePrCourseDto) {
    return 'This action adds a new prCourse';
  }

  findAll() {
    return `This action returns all prCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prCourse`;
  }

  update(id: number, updatePrCourseDto: UpdatePrCourseDto) {
    return `This action updates a #${id} prCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} prCourse`;
  }
}
