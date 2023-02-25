import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRankDto } from './dto/create-rank.dto';
import { UpdateRankDto } from './dto/update-rank.dto';
import { Rank } from './entities/rank.entity';
import { Repository} from 'typeorm';

@Injectable()
export class RankService {
  constructor(
    @InjectRepository(Rank)
    private rankRepository: Repository<Rank>,
  ){}

  create(createRankDto: CreateRankDto) {
    return this.rankRepository.query(`
    INSERT INTO rank VALUES('','${createRankDto.Detail}','${createRankDto.RankName}')`);
  }

  findAll() {
    return this.rankRepository.query(`select * from rank`);
  }

  findOne(id: number) {
    return this.rankRepository.query(`select * from rank where rankID=${id}`);
  }

  update(id: number, updateRankDto: UpdateRankDto) {
    return this.rankRepository.query(`
    update rank set
    
    RankName='${updateRankDto.RankName}',
    Detail='${updateRankDto.Detail}'
    
    where rankID=${id}
  
    `);
  }

  remove(id: number) {
    return this.rankRepository.query(`delete from rank where rankID=${id}`);
  }
}
