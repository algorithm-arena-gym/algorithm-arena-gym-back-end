import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PtMember } from './entities/pt-member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PtMemberService {
  constructor(
    @InjectRepository(PtMember)
    private ptMemberRepository:Repository<PtMember>,
  ){}
  findOne(id: number) {
    return this.ptMemberRepository.query(`SELECT * FROM member JOIN trainer_member ON trainer_member.memberID = member.memberID WHERE trainer_member.trainerID =${id}`);
  }
}
