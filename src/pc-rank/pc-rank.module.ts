import { Module } from '@nestjs/common';
import { PcRankService } from './pc-rank.service';
import { PcRankController } from './pc-rank.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PcRank } from './entities/pc-rank.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PcRank])],
  controllers: [PcRankController],
  providers: [PcRankService]
})
export class PcRankModule {}
