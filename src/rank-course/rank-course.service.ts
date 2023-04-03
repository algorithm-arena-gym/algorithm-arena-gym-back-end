import { Injectable } from '@nestjs/common';
import { CreateRankCourseDto } from './dto/create-rank-course.dto';
import { UpdateRankCourseDto } from './dto/update-rank-course.dto';

@Injectable()
export class RankCourseService {
  create(createRankCourseDto: CreateRankCourseDto) {
    return 'This action adds a new rankCourse';
  }

  findAll() {
    return `This action returns all rankCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rankCourse`;
  }

  update(id: number, updateRankCourseDto: UpdateRankCourseDto) {
    return `This action updates a #${id} rankCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} rankCourse`;
  }
}
