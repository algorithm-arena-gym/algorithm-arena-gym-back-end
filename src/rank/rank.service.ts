import { Injectable } from '@nestjs/common';
import { CreateRankDto } from './dto/create-rank.dto';
import { UpdateRankDto } from './dto/update-rank.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rank } from './entities/rank.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RankService {
  constructor(
    @InjectRepository(Rank)
    private rankReposity: Repository<Rank>,
  ) {}
  create(createRankDto: CreateRankDto) {
    return this.rankReposity.query(`INSERT INTO \`rank\`(rankPic,rankName,rankDetail)
    VALUES('${createRankDto.rankPic}','${createRankDto.rankName}','${createRankDto.rankDetail}')`);
  }

  findAll() {
    return this.rankReposity.query(`select * from rank`);
  }

  findOne(id: number) {
    return this.rankReposity.query(`select * from rank where ${id}=rankID`);
  }

  update(id: number, updateRankDto: UpdateRankDto) {
    return this.rankReposity.query(`
    update rank set 
    rankPic='${updateRankDto.rankPic}',
    rankName='${updateRankDto.rankName}',
    rankDetail='${updateRankDto.rankDetail}' 
    where rankID=${id}`);
  }

  remove(id: number) {
    return this.rankReposity.query(`delete from rank where ${id}=rankID`);
  }
}
