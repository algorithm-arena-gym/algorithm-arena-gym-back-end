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
    return this.rankReposity.query(`INSERT INTO \`rank\`(rankPic,rankName,rankDetail,rankPrice)
    VALUES('${createRankDto.rankPic}','${createRankDto.rankName}','${createRankDto.rankDetail}','${createRankDto.rankPrice}')`);
  }

  findAll() {
    return this.rankReposity.query(`select * from rank`);
  }

  findOne(id: number) {
    return this.rankReposity.query(`select * from rank where ${id}=rankID`);
  }

  update(id: number, updateRankDto: UpdateRankDto) {
    const queryParams = [];
    let query = "update rank set";
  
    if (updateRankDto.rankPic !== undefined && updateRankDto.rankPic !== null) {
      query += " rankPic=?,";
      queryParams.push(updateRankDto.rankPic);
    }
  
    if (updateRankDto.rankName !== undefined && updateRankDto.rankName !== null) {
      query += " rankName=?,";
      queryParams.push(updateRankDto.rankName);
    }
  
    if (updateRankDto.rankDetail !== undefined && updateRankDto.rankDetail !== null) {
      query += " rankDetail=?,";
      queryParams.push(updateRankDto.rankDetail);
    }
  
    if (updateRankDto.rankPrice !== undefined && updateRankDto.rankPrice !== null) {
      query += " rankPrice=?,";
      queryParams.push(updateRankDto.rankPrice);
    }
  
    // Remove the trailing comma
    query = query.slice(0, -1);
  
    query += " where rankID=?";
    queryParams.push(id);
    console.log(query)
    console.log(queryParams)
    return this.rankReposity.query(query, queryParams);
  }
  

  remove(id: number) {
    return this.rankReposity.query(`delete from rank where ${id}=rankID`);
  }
}
