import { Module } from '@nestjs/common';
import { PmTrainerService } from './pm-trainer.service';
import { PmTrainerController } from './pm-trainer.controller';

@Module({
  controllers: [PmTrainerController],
  providers: [PmTrainerService]
})
export class PmTrainerModule {}
