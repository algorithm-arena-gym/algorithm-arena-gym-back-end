import { Injectable } from '@nestjs/common';
import { PrMember } from './entities/pr-member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PrMemberService {
  constructor(
    @InjectRepository(PrMember)
    private prCourseRepository: Repository<PrMember>,
  ) {}

  findOne(id: number) {
    return this.prCourseRepository.query(`SELECT * FROM member WHERE rankID=${id}`)
  }

 
}
