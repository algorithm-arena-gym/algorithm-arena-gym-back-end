import { Injectable } from '@nestjs/common';
import { PcRank } from './entities/pc-rank.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PcRankService {
  constructor(
    @InjectRepository(PcRank)
    private pcRankRepository: Repository<PcRank>,
  ) {}
  findOne(id: number) {
    return this.pcRankRepository.query(`SELECT * FROM rank_course WHERE courseID=${id}`);
  }

  
}
