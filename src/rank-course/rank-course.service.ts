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
    VALUES('${createRankCourseDto.rankID})',
    '${createRankCourseDto.courseID}'
    )`)
  }

  findAll() {
    return this.rankCourseRepository.query(`select * from rank_course`);
  }

  findOne(id: number) {
    return this.rankCourseRepository.query(
      `select * from rank_course where rankID=${id}`,
    );
  }

  update(id: number, updateRankCourseDto: UpdateRankCourseDto) {
    return this.rankCourseRepository.query(`
    update trainer_member set

      rankID=${updateRankCourseDto.rankID},
      courseID=${updateRankCourseDto.courseID}
       WHERE rankID=${id}
    `);
  }

  remove(id: number) {
    return this.rankCourseRepository.query(
      `delete from rank_course where rankID=${id}`,
    );
  }
}
