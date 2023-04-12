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
  ) {}

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
    return this.courseMemberReposity.query(
      `select * from course_member where courseMemberID=${id}`,
    );
  }

  update(id: number, updateCourseMemberDto: UpdateCourseMemberDto) {
    const queryParams = [];
    let query = "update course_member set";
  
    if (updateCourseMemberDto.courseID !== undefined && updateCourseMemberDto.courseID !== null) {
      query += " courseID=?,";
      queryParams.push(updateCourseMemberDto.courseID);
    }
  
    if (updateCourseMemberDto.memberID !== undefined && updateCourseMemberDto.memberID !== null) {
      query += " memberID=?,";
      queryParams.push(updateCourseMemberDto.memberID);
    }
  
    
    // Remove the trailing comma
    query = query.slice(0, -1);
  
    query += " where courseMemberID=?";
    queryParams.push(id);
    console.log(query)
    console.log(queryParams)
    return this.courseMemberReposity.query(query, queryParams);
  }

  remove(id: number) {
    return this.courseMemberReposity.query(
      `delete from course_member where courseMemberID=${id}`,
    );
  }
}
