import { Injectable } from '@nestjs/common';
import { CreateCourseMemberDto } from './dto/create-course-member.dto';
import { UpdateCourseMemberDto } from './dto/update-course-member.dto';

@Injectable()
export class CourseMemberService {
  create(createCourseMemberDto: CreateCourseMemberDto) {
    return 'This action adds a new courseMember';
  }

  findAll() {
    return `This action returns all courseMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseMember`;
  }

  update(id: number, updateCourseMemberDto: UpdateCourseMemberDto) {
    return `This action updates a #${id} courseMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseMember`;
  }
}
