import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stat } from './entities/stat.entity';

@Injectable()
export class StatService {
  constructor(
    @InjectRepository(Stat)
    private statRepository: Repository<Stat>,
  ) {}
  
  private stat=[
    this.statRepository.query(`SELECT COUNT(*) as memberNum FROM \`member\``),
    this.statRepository.query(`SELECT COUNT(*) as trainerNum FROM \`trainer\``),
    this.statRepository.query(`SELECT COUNT(*) as courseNum FROM \`course\``),
    this.statRepository.query(`SELECT courseID, COUNT(memberID) as num_member FROM course_member GROUP BY courseID ORDER BY num_member DESC LIMIT 5`),
    this.statRepository.query(`SELECT rankID, COUNT(memberID) as num_member FROM member GROUP BY rankID ORDER BY num_member DESC LIMIT 5`),
    this.statRepository.query(`SELECT trainerID, COUNT(memberID) as num_member FROM trainer_member GROUP BY trainerID ORDER BY num_member DESC LIMIT 5`),
    this.statRepository.query(`SELECT memberID, COUNT(courseID) as num_course FROM course_member GROUP BY memberID ORDER BY num_course DESC LIMIT 5`)
  ];
  findOne(id: number) {
    return this.stat[id];
  }
}
