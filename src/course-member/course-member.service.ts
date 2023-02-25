import { Injectable } from '@nestjs/common';
import { CreateCourseMemberDto } from './dto/create-course-member.dto';
import { UpdateCourseMemberDto } from './dto/update-course-member.dto';
import { CourseMember } from './entities/course-member.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CourseMemberService {
  constructor(
    @InjectRepository(CourseMember)
    private courseMemberReposity: Repository<CourseMember>,
  ){}

  create(createCourseMemberDto: CreateCourseMemberDto) {
    return this.courseMemberReposity.query(`
    INSERT INTO course_member(
        
        courseID,
        memberID
        
        )
        VALUES('${createCourseMemberDto.courseID}',
        '${createCourseMemberDto.memberID}'
        
        )`);
  }

  findAll() {
    return this.courseMemberReposity.query(`select * from course_member`);
  }

  findOne(id: number) {
    return this.courseMemberReposity.query(`select * from course_member where courseID=${id}`);
  }

  update(id: number, updateCourseMemberDto: UpdateCourseMemberDto) {
    return this.courseMemberReposity.query(`
    update course_member set
      
      courseID=${updateCourseMemberDto.courseID},
      memberID=${updateCourseMemberDto.memberID}
     
      where courseMemberID=${id}
    `);
  }

  remove(id: number) {
    return this.courseMemberReposity.query(`delete from course_member where courseMemberID=${id}`);
  }
}
