import { Module } from '@nestjs/common';
import { PmRankService } from './pm-rank.service';
import { PmRankController } from './pm-rank.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PmRank } from './entities/pm-rank.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PmRank])],
  controllers: [PmRankController],
  providers: [PmRankService]
})
export class PmRankModule {}
