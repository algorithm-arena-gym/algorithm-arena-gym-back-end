import { Module } from '@nestjs/common';
import { PmRankService } from './pm-rank.service';
import { PmRankController } from './pm-rank.controller';

@Module({
  controllers: [PmRankController],
  providers: [PmRankService]
})
export class PmRankModule {}
