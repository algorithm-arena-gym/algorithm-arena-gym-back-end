import { Injectable } from '@nestjs/common';
import { CreatePmRankDto } from './dto/create-pm-rank.dto';
import { UpdatePmRankDto } from './dto/update-pm-rank.dto';

@Injectable()
export class PmRankService {
  create(createPmRankDto: CreatePmRankDto) {
    return 'This action adds a new pmRank';
  }

  findAll() {
    return `This action returns all pmRank`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pmRank`;
  }

  update(id: number, updatePmRankDto: UpdatePmRankDto) {
    return `This action updates a #${id} pmRank`;
  }

  remove(id: number) {
    return `This action removes a #${id} pmRank`;
  }
}
