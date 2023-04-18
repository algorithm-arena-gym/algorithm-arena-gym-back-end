import { Injectable } from '@nestjs/common';
import { PcMember } from './entities/pc-member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PcMemberService {
  constructor(
    @InjectRepository(PcMember)
    private pcMemberRepository: Repository<PcMember>,
  ) {}
  findOne(id: number) {
    return this.pcMemberRepository.query(`SELECT * FROM course_member JOIN member ON member.memberID=course_member.memberID WHERE courseID=${id}`);  }

}
