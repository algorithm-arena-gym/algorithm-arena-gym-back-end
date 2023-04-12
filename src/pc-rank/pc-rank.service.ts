import { Injectable } from '@nestjs/common';
import { CreatePcRankDto } from './dto/create-pc-rank.dto';
import { UpdatePcRankDto } from './dto/update-pc-rank.dto';

@Injectable()
export class PcRankService {
  create(createPcRankDto: CreatePcRankDto) {
    return 'This action adds a new pcRank';
  }

  findAll() {
    return `This action returns all pcRank`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pcRank`;
  }

  update(id: number, updatePcRankDto: UpdatePcRankDto) {
    return `This action updates a #${id} pcRank`;
  }

  remove(id: number) {
    return `This action removes a #${id} pcRank`;
  }
}
