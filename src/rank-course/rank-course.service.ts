import { Injectable } from '@nestjs/common';
import { CreateRankCourseDto } from './dto/create-rank-course.dto';
import { UpdateRankCourseDto } from './dto/update-rank-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RankCourse } from './entities/rank-course.entity';
import { Repository } from 'typeorm';
import { CourseMember } from 'src/course-member/entities/course-member.entity';

@Injectable()
export class RankCourseService {
  constructor(
    @InjectRepository(RankCourse)
    private rankCourseRepository: Repository<RankCourse>,
  ){}

  create(createRankCourseDto: CreateRankCourseDto) {
    return this.rankCourseRepository.query(`
    INSERT INTO rank_course(
      rankID,
      courseID
    )
    VALUES(${createRankCourseDto.rankID},
    ${createRankCourseDto.courseID}
    )`)
  }

  findAll() {
    return this.rankCourseRepository.query(`select * from rank_course`);
  }

  findOne(id: number) {
    return this.rankCourseRepository.query(
      `select * from rank_course where rankCourseID=${id}`,
    );
  }

  update(id: number, updateRankCourseDto: UpdateRankCourseDto) {
    let query = "UPDATE rank_course SET ";
    const queryParams = [];

    if (updateRankCourseDto.rankID !== undefined && updateRankCourseDto.rankID !== null) {
      query += "rankID=?, ";
      queryParams.push(updateRankCourseDto.rankID);
    }
    if (updateRankCourseDto.courseID !== undefined && updateRankCourseDto.courseID !== null) {
      query += "courseID=?, ";
      queryParams.push(updateRankCourseDto.courseID);
    }
    // Remove the trailing comma and space
    query = query.slice(0, -2);
    query += " WHERE rankCourseID=?";
    queryParams.push(id);
    console.log(query);
    console.log(queryParams);
    return this.rankCourseRepository.query(query, queryParams);
  }

  remove(id: number) {
    return this.rankCourseRepository.query(
      `delete from rank_course where rankCourseID=${id}`,
    );
  }
}
