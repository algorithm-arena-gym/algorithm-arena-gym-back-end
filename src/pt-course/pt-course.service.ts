import { Injectable } from '@nestjs/common';
import { CreatePtCourseDto } from './dto/create-pt-course.dto';
import { UpdatePtCourseDto } from './dto/update-pt-course.dto';

@Injectable()
export class PtCourseService {
  create(createPtCourseDto: CreatePtCourseDto) {
    return 'This action adds a new ptCourse';
  }

  findAll() {
    return `This action returns all ptCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ptCourse`;
  }

  update(id: number, updatePtCourseDto: UpdatePtCourseDto) {
    return `This action updates a #${id} ptCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} ptCourse`;
  }
}
