import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PmRank } from './entities/pm-rank.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PmRankService {
  constructor(
    @InjectRepository(PmRank)
    private pmRankRepository:Repository<PmRank>,
  ){}
  findOne(id: number) {
    return this.pmRankRepository.query(`
    SELECT * FROM rank
    JOIN member
    ON member.rankID=rank.RankID
    WHERE member.memberID=${id}
    `);
  }
}
