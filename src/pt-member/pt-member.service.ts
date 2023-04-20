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
    return this.ptMemberRepository.query(`
    SELECT * FROM member
    JOIN trainer_member
    ON trainer_member.memberID = member.memberID 
    WHERE trainer_member.trainerID =${id}
    ORDER BY
     CASE
          WHEN trainingDate = 'Sunday' THEN 1
          WHEN trainingDate = 'Monday' THEN 2
          WHEN trainingDate = 'Tuesday' THEN 3
          WHEN trainingDate = 'Wednesday' THEN 4
          WHEN trainingDate = 'Thursday' THEN 5
          WHEN trainingDate = 'Friday' THEN 6
          WHEN trainingDate = 'Saturday' THEN 7
     END ASC,trainingTime
    `);
  }
}
