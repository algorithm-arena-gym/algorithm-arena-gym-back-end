import { Module } from '@nestjs/common';
import { PcRankService } from './pc-rank.service';
import { PcRankController } from './pc-rank.controller';

@Module({
  controllers: [PcRankController],
  providers: [PcRankService]
})
export class PcRankModule {}
